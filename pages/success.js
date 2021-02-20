import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Dashboard() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>613 News</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="galleryShell">
          <div className="shell-content">
            <div className={styles.h22}>Almost there 🙌</div>
            <div className={styles.p22}>
              Please check your email for a confirmation letter. Without it you
              will not be able to access the site.
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .section {
          max-width: 90vw;
          height: 100vh;
        }
        .galleryShell {
          background: rgba(197, 197, 197, 0.22);
          border-radius: 10px;
          max-width: 600px;
        }
        .shell-content {
          padding: 5vw;
        }
      `}</style>
    </>
  );
}
