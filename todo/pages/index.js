import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>메인 | 투두</title>
        <meta name="description" content="할일관리서비스 투두 입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>메인 페이지</h1>

      <nav>
        <Link href="/">메인</Link>

        <Link href="/about">어바웃</Link>
      </nav>
    </>
  );
}
