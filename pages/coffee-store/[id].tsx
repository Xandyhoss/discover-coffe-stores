import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function CoffeeStore() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="bg-coffee min-h-screen bg-cover bg-fixed bg-no-repeat flex flex-col items-center p-10">
      <div className="animate-enter flex flex-col items-center">
        <Head>
          <title>{id}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-6xl font-bold text-center font-roboto">{id}</h1>
        <Link href={"/"}>
          <button className="bg-blue-600 rounded-md p-2 mt-8 hover:bg-blue-400 hover:font-bold transition-all">
            Go back
          </button>
        </Link>
      </div>
    </div>
  );
}
