import { useContext, useState } from "react";
import { ACTION_TYPES, StoreContext } from "../contexts/storeContext";

export default function useTrackLocation(): {
  // latLong: string;
  handleTrackLocation: () => void;
  locationErrorMessage: string;
  // isLoading: boolean
} {
  const [locationErrorMessage, setLocationErrorMessage] = useState("");
  // const [latLong, setLatLong] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  const { dispatch, state } = useContext(StoreContext);
  const { loading } = state;

  const setLoading = (bool: boolean) => {
    dispatch({
      type: ACTION_TYPES.SET_LOADING,
      payload: { loading: bool },
    });
  };

  const success = (position: GeolocationPosition) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // setLatLong(`${latitude},${longitude}`);
    dispatch({
      type: ACTION_TYPES.SET_LAT_LONG,
      payload: { latLong: `${latitude},${longitude}` },
    });

    setLocationErrorMessage("");
    setLoading(false);
  };
  const error = (position: GeolocationPositionError) => {
    setLocationErrorMessage("Unable to retrieve your location");
    setLoading(false);
  };

  const handleTrackLocation = (): void => {
    setLoading(true);
    if (!navigator.geolocation) {
      setLocationErrorMessage("Geolocation is disabled on your browser");
      setLoading(false);
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };
  return {
    // latLong,
    handleTrackLocation,
    locationErrorMessage,
    // isLoading,
  };
}
