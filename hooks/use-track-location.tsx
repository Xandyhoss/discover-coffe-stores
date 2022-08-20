import { useState } from "react";

export default function useTrackLocation(): {
  latLong: string;
  handleTrackLocation: () => void;
  locationErrorMessage: string;
  isLoading: boolean;
} {
  const [locationErrorMessage, setLocationErrorMessage] = useState("");
  const [latLong, setLatLong] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const success = (position: GeolocationPosition) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLatLong(`${latitude},${longitude}`);
    setLocationErrorMessage("");
    setIsLoading(false);
  };
  const error = (position: GeolocationPositionError) => {
    setLocationErrorMessage("Unable to retrieve your location");
    setIsLoading(false);
  };

  const handleTrackLocation = (): void => {
    setIsLoading(true);
    if (!navigator.geolocation) {
      setLocationErrorMessage("Geolocation is disabled on your browser");
      setIsLoading(false);
    } else {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };
  return {
    latLong,
    handleTrackLocation,
    locationErrorMessage,
    isLoading,
  };
}
