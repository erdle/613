import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/Image';
import { Cta } from '../components/Cta';

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>613 News</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="section flex">
          <div className="writing">
            <div className="section__title">
              <span>What’s new in Ottawa?</span>
            </div>
            <div className="section__description">
              <span>
                Discover new places in Ottawa by shopping local. Let's make this
                city better together.
              </span>
            </div>
            <div className="section__cta">
              <Cta />
            </div>
          </div>
          <div className="section__cover">
            <Image src="/cover.png" width="500" height="500" />
          </div>
        </div>
      </div>
      <style jsx>{`
        .section {
          max-width: 90vw;
        }
        .flex {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          grid-gap: 2rem;
        }
        .section__cover {
          display: grid;

          place-items: center;
          max-width: 450px;
        }

        .writing {
          max-width: 450px;
          min-height: 500px;
          z-index: 1100;
        }

        .section__title {
          font-weight: 400;
          font-family: Recoleta, EB Garamond, Serif;
          margin: 0;
          font-size: min(18vw, 97px);
          line-height: 79.5%;
          text-align: left;
          color: var(--tx1);
          max-width: 100%;
        }

        .section__description {
          padding-top: 2rem;
          max-width: 100%;
          font-weight: 300;
          font-family: Noto;
          font-size: min(5vw, 18px);
          font-family: Noto;
          font-style: normal;
          font-weight: 400;
          line-height: 120.69%;
          text-align: left;
          letter-spacing: -0.03rem;
          color: var(--tx1);
        }

        .section__cta {
          padding-top: 2rem;
        }
        @media only screen and (max-width: 800px) {
          .section {
            max-width: 100vw;
          }
          .flex {
            display: grid;
            grid-template-rows: 200px 1fr;
          }
          .section__cover {
            grid-row-start: 1;
            display: grid;

            width: min(100vw, 450px);
          }

          .writing {
            grid-row-start: 2;
            max-width: 90vw;
            min-height: 500px;
            margin: 0 1rem;
          }
        }
        .section__description {
          padding-top: 1rem;
        }
      `}</style>
    </>
  );
}
