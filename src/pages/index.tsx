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
          <h1 className="text-4xl font-bold">
            Hi, I'm Lukas.
          </h1>
          <br />
          <h2 className="text-xl font-extralight leading-relaxed">
            I am a software developer who enjoys building products for people to use.
            <br />
            <br />
            On here, I write about my journey and my thoughts.
          </h2>
        </div>
      </div>
    </main>
  </div>
);

export default Home;
