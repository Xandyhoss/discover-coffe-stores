import Head from "next/head";
import { useEffect, useState } from "react";
import CoffeeShopsList from "../components/CoffeeShopsList";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import useTrackLocation from "../hooks/use-track-location";
import { fetchCoffeeStores } from "../lib/coffeeStores";
import { coffeeShop } from "../utils/types";

export async function getStaticProps() {
  const coffeeShops = await fetchCoffeeStores("-17.542411,-39.739676");
  return {
    props: { coffeeShops },
  };
}

type PropsType = {
  coffeeShops: coffeeShop[];
};

export default function Home(props: PropsType) {
  const [userCustomShops, setUserCustomShops] = useState<coffeeShop[]>([]);
  const { handleTrackLocation, latLong, locationErrorMessage } =
    useTrackLocation();

  const getNearbyShops = async (latLong) => {
    try {
      const response = await fetch(`/api/fetchShops/`, {
        method: "POST",
        body: JSON.stringify({ latLong }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setUserCustomShops(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (latLong) {
      getNearbyShops(latLong);
    }
  }, [latLong]);

  return (
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
            {userCustomShops.length > 0 ? (
              <CoffeeShopsList
                coffeeShops={userCustomShops}
                nearby={true}
                latLong={latLong}
              />
            ) : (
              <CoffeeShopsList
                coffeeShops={props.coffeeShops}
                nearby={false}
                latLong={"-17.542411,-39.739676"}
              />
            )}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
