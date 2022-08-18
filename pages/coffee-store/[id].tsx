import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function coffeeStore() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Head>
        <title>{id}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>{id}</h1>
      <Link href="/">Back to home</Link>
    </>
  );
}
