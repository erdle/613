import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { CreateShell } from '@/components/CreateShell';

export default function create() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>613 News</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <CreateShell />
        </div>
      </div>
      <style jsx>{``}</style>
    </>
  );
}
