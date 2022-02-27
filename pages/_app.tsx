import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Link from 'next/link';
import MainMenuItem from '../components/MainMenuItem';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className='max-w-5xl mx-auto flex flex-col items-center bg-slate-100'>
        <ul className="w-full flex justify-between">
          <MainMenuItem href='/projekter'>Projekter</MainMenuItem>
          <MainMenuItem href='/referencer'>Referencer</MainMenuItem>
          <MainMenuItem href='/'>Lukas Gjetting</MainMenuItem>
          <MainMenuItem href='/blog'>Blog</MainMenuItem>
          <MainMenuItem href='/kontakt'>Kontakt</MainMenuItem>
        </ul>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
