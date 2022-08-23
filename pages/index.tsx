import Head from "next/head";
import { useContext, useEffect, useState } from "react";
import CoffeeShopsList from "../components/CoffeeShopsList";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import useTrackLocation from "../hooks/use-track-location";
import { fetchCoffeeStores } from "../lib/coffeeStores";
import { coffeeShop } from "../utils/types";
import { ACTION_TYPES, StoreContext } from "../contexts/storeContext";
import Loading from "../components/Loading";

export async function getStaticProps() {
  const coffeeShops = await fetchCoffeeStores();
  return {
    props: { coffeeShops },
  };
}

type PropsType = {
  coffeeShops: coffeeShop[];
};

export default function Home(props: PropsType) {
  // const [userCustomShops, setUserCustomShops] = useState<coffeeShop[]>([]);
  const { handleTrackLocation, locationErrorMessage } = useTrackLocation();

  const { state, dispatch } = useContext(StoreContext);
  const { coffeeStores, latLong, loading } = state;

  //CORS PROBLEM, SOLVED USING BUILT IN NEXT NODE.JS SERVER. IF NOT, THE FUNCTION BELOW WOULD WORK

  // const getNearbyShops = async (latLong) => {
  //   try {
  //     const data = await fetchCoffeeStores(latLong);
  //     setUserCustomShops(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    const getNearbyShops = async (latLong: string, limit: number) => {
      try {
        const response = await fetch(`/api/fetchShops/`, {
          method: "POST",
          body: JSON.stringify({ latLong, limit }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = (await response.json()) as coffeeShop[];
        dispatch({
          type: ACTION_TYPES.SET_COFFEE_STORES,
          payload: {
            coffeeStores: data,
          },
        });
      } catch (error) {}
    };
    if (latLong) {
      getNearbyShops(latLong, 16);
    }
  }, [dispatch, latLong]);

  return (
    <>
      {loading && <Loading />}
      <div className="bg-coffee min-h-screen bg-cover bg-fixed bg-no-repeat flex flex-col items-center">
        <div className="min-h-screen w-full max-w-[1100px] flex flex-col">
          <Head>
            <title>Coffee Discover</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <main className="flex flex-col items-center justify-center p-10 pb-14 h-auto">
            <div>
              <PageHeader customLocation={handleTrackLocation} />
              {locationErrorMessage && (
                <p className="mt-2 transition-all">
                  Something went wrong: {locationErrorMessage}
                </p>
              )}
            </div>
            <div className="mt-10 w-full">
              {coffeeStores.length > 0 ? (
                <CoffeeShopsList coffeeShops={coffeeStores} nearby={true} />
              ) : (
                <CoffeeShopsList
                  coffeeShops={props.coffeeShops}
                  nearby={false}
                />
              )}
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
