import Head from "next/head";
import CoffeeShopsList from "../components/CoffeeShopsList";
import PageHeader from "../components/PageHeader";

export default function Home() {
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
            <CoffeeShopsList />
          </div>
        </main>
        <footer className="h-8 bg-gray-800 fixed left-0 bottom-0 w-full flex justify-center items-center">
          2022 Harrison
        </footer>
      </div>
    </div>
  );
}
