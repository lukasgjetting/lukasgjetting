import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => (
  <div>
    <Head>
      <title>Home — Lukas Gjetting</title>
    </Head>
    <main>
      <div className="flex items-center">
        <div className="pl-8">
          <span className="text-4xl font-bold">
            Hi, I'm Lukas.
          </span>
          <br />
          <br />
          <span className="text-xl font-extralight leading-relaxed">
            I am a software developer who enjoys building products for people to use.
          </span>
        </div>
      </div>
    </main>
  </div>
);

export default Home;
