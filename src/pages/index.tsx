import type { NextPage } from 'next';
import Head from 'next/head';
import FadingLightbulb from '../components/FadingLightbulb';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Forside — Lukas Gjetting</title>
    </Head>
    <main>
      <div className="flex items-center">
        <FadingLightbulb />
        <div className="pl-8">
          <span className="text-4xl font-bold">
            Har du en god ide?
          </span>
          <br />
          <span className="text-xl font-extralight leading-relaxed">
            Jeg hjælper virksomheder og iværksættere
            <br />
            med at omsætte ideer til virkelighed.
            <br />
          </span>
          <span className="text-xl font-extralight pt-4 block">
            Skal vi finde en løsning?
          </span>
        </div>
      </div>
    </main>
  </div>
);

export default Home;
