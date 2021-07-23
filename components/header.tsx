import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <>
      <header
        className="w-full pt-7 pb-0 h-32 bg-repeat-x bg-top shadow-lg"
        style={{
          backgroundImage: `url("/images/bg-header.gif")`,
        }}
      >
        <h1
          className="block w-56 h-14 my-0 mx-auto whitespace-nowrap overflow-hidden indent-lg"
          style={{
            backgroundImage: `url("/images/logo.png")`,
          }}
        >
          <Link href={`/`}>
            <a className="block w-full h-full">SAMPLE SITE</a>
          </Link>
        </h1>
        <nav className="flex items-center mt-0 h-10 justify-center">
          <ul>
            <li className={"inline-block my-0 mx-4 w-20"}>
              <Link href={`/`}>
                <a className="inline-block w-24 h-8 leading-8 align-baseline text-center rounded-lg text-gray-600 tracking-wider hover:bg-red-600 hover:text-red-100 hover:scale-105 transition">
                  HOME
                </a>
              </Link>
            </li>
            <li className={"inline-block my-0 mx-4 w-20"}>
              <Link href={`/about`}>
                <a className="inline-block w-24 h-8 leading-8 align-baseline text-center rounded-lg text-gray-600 tracking-wider hover:bg-red-600 hover:text-red-100 hover:scale-105 transition">
                  ABOUT
                </a>
              </Link>
            </li>
            <li className={"inline-block my-0 mx-4 w-20"}>
              <Link href={`/news`}>
                <a className="inline-block w-24 h-8 leading-8 align-baseline text-center rounded-lg text-gray-600 tracking-wider hover:bg-red-600 hover:text-red-100 hover:scale-105 transition">
                  NEWS
                </a>
              </Link>
            </li>
            <li className={"inline-block my-0 mx-4 w-20"}>
              <Link href={`/topics`}>
                <a className="inline-block w-24 h-8 leading-8 align-baseline text-center rounded-lg text-gray-600 tracking-wider hover:bg-red-600 hover:text-red-100 hover:scale-105 transition">
                  TOPICS
                </a>
              </Link>
            </li>
            <li className={"inline-block my-0 mx-4 w-20"}>
              <Link href={`/docs`}>
                <a className="inline-block w-24 h-8 leading-8 align-baseline text-center rounded-lg text-gray-600 tracking-wider hover:bg-red-600 hover:text-red-100 hover:scale-105 transition">
                  DOCS
                </a>
              </Link>
            </li>
            <li className={"inline-block my-0 mx-4 w-20"}>
              <Link href={`/blog`}>
                <a className="inline-block w-24 h-8 leading-8 align-baseline text-center rounded-lg text-gray-600 tracking-wider hover:bg-red-600 hover:text-red-100 hover:scale-105 transition">
                  BLOG
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
