import "../styles/globals.css";
import Link from "next/line";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="description" content="할일관리서비스 투두 입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <nav>
          <Link href="/">
            <a style={{ color: "" }}>메인</a>
          </Link>

          <Link href="/about">
            <a style={{ color: "pink" }}>어바웃</a>
          </Link>

          <Link href="/contact">
            <a style={{ color: "pink" }}>연락처</a>
          </Link>
        </nav>
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
