import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';
import MainMenuItem from '../components/MainMenuItem';
import ConvertKitForm from '../components/ConvertKitForm';

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-WNHL6DHX6D" />
    <Script id="google-analytics" strategy="afterInteractive">
      {`
      // Global site tag (gtag.js) - Google Analytics
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-WNHL6DHX6D');
      `}
    </Script>
    <div className="max-w-xl mx-auto flex flex-col items-center">
      <div className="w-full flex items-center pt-4 pb-12">
        <div className="flex-1 flex justify-center">
          <MainMenuItem href="/">Home</MainMenuItem>
          <MainMenuItem href="/blog">Blog</MainMenuItem>
          <MainMenuItem href="/contact">Contact</MainMenuItem>
        </div>
      </div>
      <div className="w-full">
        <Component {...pageProps} />
      </div>
    </div>
  </>
);

export default App;
