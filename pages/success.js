import Head from 'next/head';
import { FormProvider } from 'react-hook-form';
import styles from '../styles/Home.module.css';
import { Cta } from '../components/Cta';

export default function Dashboard() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>613 News</title>
          <link rel="icon" href="/cover.svg" />
        </Head>
        <div className={styles.layout}>
          <div className="header">
            <a href="/">
              <img type="image/svg+xml" src="/cover.svg"></img>
            </a>
          </div>
          <div className="writing">
            <div className="section__title">
              <span>Nice to finally e-meet You !</span>
            </div>
            <p className="section__description">
              <span>
                Our mission is simple:{' '}
                <span className="description__highlight">
                  Get to know our city and people around us by shopping local.
                </span>{' '}
                Every Friday you will receive a curated list of local products
                submitted by you - our community. So if you don’t want to miss
                our emails, make sure to do the following:
              </span>
            </p>
            <div className="section__cta">
              <Cta />
            </div>
            <div className="todolist">
              <div className="todolist__item">
                <div className="item__graphic">☝️</div>
                <div className="item__text">
                  <div className="item__tagline">Check your email </div>
                  <div className="item__description">
                    Don’t forget to check your spam and “Promotions” tab{' '}
                  </div>
                </div>
              </div>
              <div className="todolist__item">
                <div className="item__graphic">✌️</div>
                <div className="item__text">
                  <div className="item__tagline">Move it to “Primary” </div>
                  <div className="item__description">
                    Follow these instructions for every email provider{' '}
                  </div>
                </div>
              </div>
              <div className="todolist__item">
                <div className="item__graphic">🖖</div>
                <div className="item__text">
                  <div className="item__tagline">No more FOMO </div>
                  <div className="item__description">
                    Enjoy the latest and greatest from the community{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .section__cta {
          margin-top: 2rem;
        }
        .header {
          background-color: transparent;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .section {
          max-width: 90vw;
          height: 100vh;
        }
        .writing {
          padding-top: 2rem;
          z-index: 1100;
        }

        .section__title {
          font-weight: 500;
          font-family: Recoleta, EB Garamond, Serif;
          margin: 0;
          font-size: min(70px, 70px);
          line-height: 90.5%;
          text-align: left;
          color: var(--tx1);
          font-style: normal;
          letter-spacing: -0.055em;
        }

        .section__description {
          padding-top: 2rem;

          font-weight: 400;
          font-family: Noto;
          font-size: min(8vw, 26px);

          font-style: normal;

          line-height: 120.69%;
          text-align: left;
          letter-spacing: -0.045rem;
          color: var(--tx1);
        }

        .description__highlight {
          display: inline;
          font-weight: 600;
          font-family: Recoleta, EB Garamond, Serif;
          font-size: min(30px, 36px);
          font-style: normal;
          padding: 0;
          margin: 0;
          line-height: 110.69%;
          letter-spacing: -0.045rem;
          background: -webkit-linear-gradient(
            20.09deg,
            #81cfe8 18.33%,
            #56a8ff 49.11%,
            #ffbb00 69.07%,
            rgba(255, 125, 234, 0.9) 98.19%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .todolist {
          margin-top: 2rem;
          display: flex;
          flex-wrap: wrap;
          gap: 2rem;
          justify-content: space-between;
        }

        .todolist__item {
          max-width: 210px;
        }

        .item__graphic {
          font-size: 66px;
        }

        .item__tagline {
          padding-top: 1rem;
          font-family: Noto;
          font-size: min(6vw, 21px);

          font-style: normal;
          font-weight: 700;
          line-height: 26px;
          letter-spacing: -0.025em;
          text-align: left;
          color: var(--tx1);
        }

        .item__description {
          padding-top: 2rem;
          font-family: Noto;
          font-size: min(5vw, 21px);

          font-style: normal;
          font-weight: 400;
          line-height: 26px;
          letter-spacing: -0.025em;
          text-align: left;
          color: var(--tx1);
        }
      `}</style>
    </>
  );
}
