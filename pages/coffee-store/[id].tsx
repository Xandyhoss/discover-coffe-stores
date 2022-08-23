/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Star } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { StoreContext } from "../../contexts/storeContext";
import {
  fetchCoffeeStoreById,
  fetchCoffeeStores,
} from "../../lib/coffeeStores";
import { coffeeShop } from "../../utils/types";

export async function getStaticProps({ params }) {
  const coffeeShops = await fetchCoffeeStoreById(params.id);
  return {
    props: {
      coffeeShops,
    },
  };
}

export async function getStaticPaths() {
  const coffeeShops = await fetchCoffeeStores();
  const paths = coffeeShops.map((coffeeStore) => {
    return {
      params: {
        id: coffeeStore.fsq_id.toString(),
      },
    };
  });
  return {
    paths,
    fallback: true,
  };
}

type PropsType = {
  coffeeShops: coffeeShop;
};

export default function CoffeeStore(props: PropsType) {
  const router = useRouter();
  const id = router.query.id;
  const {
    state: { coffeeStores },
  } = useContext(StoreContext);

  useEffect(() => {
    const handleCreateCoffeeStore = async (coffeeStore) => {
      try {
        const { fsq_id, name, location, imgUrl } = coffeeStore as coffeeShop;
        const response = await fetch("/api/createCoffeeStore", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: fsq_id,
            name,
            address: location.address,
            cep: location.postcode,
            votes: 0,
            imgUrl,
          }),
        });
        const dbCoffeeStore = await response.json();
      } catch (err) {
        console.error("Error creating coffee store", err);
      }
    };

    if (props.coffeeShops === undefined) {
      if (coffeeStores.length > 0) {
        const findCoffeeStoreById = coffeeStores.find((coffeeStore) => {
          return coffeeStore.id.toString() === id; //dynamic id
        });
        handleCreateCoffeeStore(findCoffeeStoreById);
      }
    } else {
      handleCreateCoffeeStore(props.coffeeShops);
    }
  }, [id, coffeeStores, props.coffeeShops]);

  if (router.isFallback) {
    return (
      <div className="w-full flex justify-center items-center">Loading</div>
    );
  }

  const { name, location, imgUrl } = props.coffeeShops;

  const handleUpvote = () => {
    console.log("upvote handled");
  };

  return (
    <div className="bg-coffee min-h-screen bg-cover bg-fixed bg-no-repeat flex flex-col items-center p-10">
      <div className="animate-enter flex flex-col items-center">
        <Head>
          <title>{name}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-6xl font-bold text-center font-roboto">{name}</h1>
        <p className="font-bold font-roboto text-blue-300">
          {location.address}
        </p>
        <p className="font-bold font-roboto text-blue-300">
          {location.postcode}
        </p>
        <div className="h-52 w-52 mt-4 overflow-hidden rounded-lg hover:scale-[1.02] transition-all">
          <a target={"_blank"}>
            <Image
              src={imgUrl}
              alt={name}
              height={208}
              width={208}
              className="object-cover"
            />
          </a>
        </div>
        <div className="mt-2 flex gap-2 items-center">
          <Star size={20} /> 1
          <button
            className="bg-blue-600 rounded-full text-[0.8rem] p-1 hover:bg-blue-500 transition-all"
            onClick={handleUpvote}
          >
            upvote+
          </button>
        </div>

        <Link href={"/"}>
          <button className="bg-blue-600 rounded-md p-2 mt-5 hover:bg-blue-400 hover:font-bold transition-all">
            Go back
          </button>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
