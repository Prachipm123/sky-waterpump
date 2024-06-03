import ShareBar from "@/components/ui/ShareBar";
import "@/styles/globals.css";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ShareBar></ShareBar>

      <Component {...pageProps} />
    
    </>
  );
}
