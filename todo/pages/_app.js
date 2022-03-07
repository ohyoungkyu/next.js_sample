import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import Link from "next/link";
import PropTypes from "prop-types";
import * as React from "react";
import createEmotionCache from "../src/createEmotionCache";
import theme from "../src/theme";
import "../styles/globals.css";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="description" content="할일관리서비스 투두 입니다." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <header>
          <nav>
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
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

//
