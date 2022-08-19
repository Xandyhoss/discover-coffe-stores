import Head from "next/head";
import CoffeeShopsList from "../components/CoffeeShopsList";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";
import { fetchCoffeeStores } from "../lib/coffeeStores";

export async function getStaticProps() {
  const coffeeShops = await fetchCoffeeStores();
  return {
    props: { coffeeShops },
  };
}

type PropsType = {
  coffeeShops: {
    fsq_id: string;
    name: string;
    link: string;
    location: {
      address: string;
      formatted_address: string;
      postcode: string;
    };
  }[];
};

export default function Home(props: PropsType) {
  return (
    <div className="bg-coffee min-h-screen bg-cover bg-fixed bg-no-repeat flex flex-col items-center">
      <div className="min-h-screen w-full max-w-[1100px] flex flex-col">
        <Head>
          <title>Coffee Discover</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex flex-col items-center justify-center p-10 pb-14 h-auto">
          <div>
            <PageHeader />
          </div>
          <div className="mt-10 w-full">
            <CoffeeShopsList coffeeShops={props.coffeeShops} />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
