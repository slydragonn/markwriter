import Head from 'next/head';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>MarkWriter | Home</title>
        <meta
          name="description"
          content="MarkWriter | A simple and straightforward Markdown Web Editor"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello World!</h1>
    </>
  );
}
