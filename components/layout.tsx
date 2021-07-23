import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "./header";

export default function Layout(props) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className="mt-5 flex m-auto w-full max-w-4xl flex-col">
        <div className="h-80 bg-blue-400 flex flex-row">
          <main className="w-3/4  bg-pink-300">{props.children}</main>
          <div className="w-1/4 bg-green-300">sidebar</div>
        </div>
        <footer className=" w-full h-20 bg-pink-900 text-center align-baseline">
          aaa
        </footer>
      </div>
    </>
  );
}
