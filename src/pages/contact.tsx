import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Contact: NextPage = () => (
  <div>
    <Head>
      <title>Contact — Lukas Gjetting</title>
    </Head>
    <main>
      <div className="flex items-center">
        <div className="pl-8">
          <span className="text-4xl font-bold">
            Contact me
          </span>
          <br />
          <br />
          <span className="text-xl font-extralight leading-relaxed">
            To get in touch, please use any of the methods listed below.
            <br />
            I am always happy to help in any way I can.
          </span>
          <br />
          <br />
          <a href="mailto:hi@lukasgjetting.com" className="mb-5 flex items-center">
            <Image width={24} height={24} src="/icon-envelope.svg" alt="Envelope icon" />
            <span className="pl-2 text-[#1e73be]">hi@lukasgjetting.com</span>
          </a>
          <a href="https://m.me/lukasgjetting" target="_blank" rel="noreferrer" className="mb-5 flex items-center">
            <Image width={24} height={24} src="/icon-messenger.svg" alt="Messenger icon" />
            <span className="pl-2 text-[#1e73be]">Message me on Facebook</span>
          </a>
          <a href="https://www.linkedin.com/in/lukasgjetting/" target="_blank" rel="noreferrer" className="mb-3 flex items-center">
            <Image width={24} height={24} src="/icon-linkedin.svg" alt="LinkedIn icon" />
            <span className="pl-2 text-[#1e73be]">Connect on LinkedIn</span>
          </a>
        </div>
      </div>
    </main>
  </div>
);

export default Contact;
