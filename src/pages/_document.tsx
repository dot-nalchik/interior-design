"use client";

import { Html, Main, Head, NextScript } from "next/document";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Document() {
  return (
    <Html lang="ru">
      <Head />
      <body>
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
