import "../styles/globals.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { ThemeProvider } from 'next-themes'

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
    <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-36 xl:px-48 ">
      <div className="h-full col-span-12 p-4 text-base dark:bg-black text-center bg-white dark:bg-dark-500 lg:col-span-3 rounded-2xl shadow-custom-light dark:shadow-custom-dark max-w-full ">
        <Sidebar />
      </div>
      <div className="flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light dark:bg-dark-500 dark:shadow-custom-dark rounded-2xl lg:col-span-9 dark:bg-dark-500">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </div>
    </ThemeProvider>
  );
}

export default MyApp;
