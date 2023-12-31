import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { store } from "@/store";
import Loading from "@/components/Loading";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Loading />
      <Component {...pageProps} />
    </Provider>
  );
}
