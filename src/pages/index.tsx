import Head from 'next/head';
import LayOut from "@/components/LayOut";
import Warn from '@/container/Home/Warn';
// import the interfaces from type.tsx



export default function HomePage() {
  return (
    <LayOut>
      <Head>
        <title>HOME | dxx=</title>
        <meta
          name="description"
          content="I2AROBOT 2"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='home-page'>
        <Warn  />
      </div>
    </LayOut>
  );
}
