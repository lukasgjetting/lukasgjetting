/* eslint-disable @next/next/no-img-element */
/* eslint-disable max-len */
import type { NextPage } from 'next';
import Head from 'next/head';

const NonogramFarm: NextPage = () => (
  <div>
    <Head>
      <title>Nonogram Farm</title>
    </Head>
    <main className="prose mb-16">
      <h1>Nonogram Farm</h1>
      <p>
        A cutesy game puzzle and farming game, built in a weekend by my wife and I.
      </p>
      <img src="/nonogram-farm/nonogram-farm-1.png" alt="Nonogram Farm" className="w-3/5 mx-auto rounded-lg shadow-lg" />
      <h2>App description</h2>
      <p><em>Written by the ever-helpful ChatGPT</em></p>
      <p>Discover a relaxing yet challenging way to sharpen your mind with our nonogram puzzle app, where solving puzzles also helps you grow and manage your own virtual farm. This app uniquely combines the classic nonogram puzzle-solving experience with a delightful farming simulation, creating a soothing gameplay loop that is both mentally stimulating and visually satisfying. Each puzzle you solve allows you to earn coins, which you can use to buy seeds and plant crops.</p>
      <p>The app's cozy design and intuitive interface make it an ideal choice for anyone looking to unwind while keeping their brain engaged. The nonogram puzzles are presented in a clear, user-friendly grid, with easy-to-understand number clues guiding you as you fill in squares to reveal hidden images. The soothing background and relaxing soundtrack ensure that you can enjoy your puzzle-solving experience without distractions, making it the perfect companion for a peaceful evening or a short mental break during a busy day.</p>
      <p>As you progress, you'll unlock new seeds and expand your farm by solving more complex puzzles. The in-game shop allows you to purchase additional nonograms, each offering a new challenge and the potential to discover unique crops. The more you play, the more vibrant and diverse your farm becomes, providing a continuous sense of achievement and growth.</p>
    </main>
  </div>
);

export default NonogramFarm;
