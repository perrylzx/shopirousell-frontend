import "@/styles/globals.css";
import { colors } from "@/styles/globals";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";
import Head from "next/head";
import Layout from "./components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.base[2],
        },
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ConfigProvider>
  );
}
