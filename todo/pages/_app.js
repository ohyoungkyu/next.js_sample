import "../styles/globals.css";
import Link from "next/link";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="할일관리서비스 투두 입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <nav className="bg-red-500">
          <ul className="flex">
            <li>
              <Link href="/">
                <a className="block p-4 hover:text-[#afafaf]">메인</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a className="block p-4 hover:text-[#afafaf]">어바웃</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a className="block p-4 hover:text-[#afafaf]">연락처</a>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
