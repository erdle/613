import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useAuth } from '@/lib/auth';
import { GalleryShell } from '@/components/GalleryShell';

export default function Dashboard() {
  const auth = useAuth();

  if (!auth.user) {
    return 'Loading...';
  }

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>613 News</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <GalleryShell />
      </div>
      <style jsx>{`
        .section {
          max-width: 90vw;
          height: 100vh;
        }
      `}</style>
    </>
  );
}
