import Head from "next/head";
import CoffeeShopsList from "../components/CoffeeShopsList";
import PageHeader from "../components/PageHeader";

const coffeeShopsData = [
  {
    id: 0,
    name: "StrangeLove Coffee",
    imgUrl:
      "https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
    websiteUrl: "https://www.strangelovecoffee.ca/",
    address: "983 Queen St E, Toronto, ON M4M 1K2",
    neighbourhood: "at King and Spadina",
  },
  {
    id: 1,
    name: "Dark Horse Coffee",
    imgUrl:
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80",
    websiteUrl: "https://www.darkhorseespresso.com/",
    address: "401 Richmond St W",
    neighbourhood: "Richmond and Spadina",
  },
  {
    id: 300,
    name: "Route 300",
    imgUrl:
      "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2468&q=80",
    websiteUrl: "https://www.darkhorseespresso.com/",
    address: "401 Richmond St W",
    neighbourhood: "Route 300 Neighbourhood",
  },
];

export async function getStaticProps() {
  return {
    props: { coffeeShops: coffeeShopsData },
  };
}

type PropsType = {
  coffeeShops: {
    id: number;
    name: string;
    imgUrl: string;
    websiteUrl: string;
    address: string;
    neighbourhood: string;
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
        <footer className="h-8 bg-gray-800 fixed left-0 bottom-0 w-full flex justify-center items-center">
          2022 Harrison
        </footer>
      </div>
    </div>
  );
}
