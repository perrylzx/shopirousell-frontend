import "@/styles/globals.css";
import { colors } from "@/styles/globals";
import { ConfigProvider } from "antd";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: colors.base[2],
        },
      }}
    >
      <Component {...pageProps} />
    </ConfigProvider>
  );
}
