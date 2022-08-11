import "../styles/globals.css";
import Sidebar from "../components/Sidebar";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="grid grid-cols-12 gap-6 lg:px-48 my-14 px-5">
      <div className="col-span-12 bg-white lg:col-span-3 rounded-2xl p-4 text-center">
        <Sidebar/>
      </div>
      <div className="col-span-12 bg-white lg:col-span-9 rounded-2xl">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;
