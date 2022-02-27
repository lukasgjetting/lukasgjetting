import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Link from 'next/link';
import MainMenuItem from '../components/MainMenuItem';

const App = ({ Component, pageProps }: AppProps) => (
  <div className="max-w-5xl mx-auto flex flex-col items-center">
    <div className="w-full flex items-center py-4">
      <div className="flex-1 flex justify-end">
        <MainMenuItem href="/projekter">Projekter</MainMenuItem>
        <MainMenuItem href="/referencer">Referencer</MainMenuItem>
      </div>
      <Link href="/">
        <a className="text-4xl font-mono font-light px-4">
          Lukas Gjetting
        </a>
      </Link>
      <div className="flex-1 flex">
        <MainMenuItem href="/blog">Blog</MainMenuItem>
        <MainMenuItem href="/kontakt">Kontakt</MainMenuItem>
      </div>
    </div>
    <Component {...pageProps} />
  </div>
);

export default App;
