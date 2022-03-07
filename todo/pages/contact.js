import Head from "next/head";
import Link from "next/line";

export default function About() {
  return (
    <>
      <Head>
        <title>앱소개 | 투두</title>
        <meta name="description" content="할일관리서비스 투두 입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>앱 소개 페이지</h1>

      <nav>
        <Link href="/">
          <a style={{ color: "" }}>메인</a>
        </Link>

        <Link href="/about">
          <a style={{ color: "pink" }}>어바웃</a>
        </Link>
      </nav>
    </>
  );
}
