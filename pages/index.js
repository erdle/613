import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Button } from '../components/Button';
import { Cta } from '../components/Cta';
import { useAuth } from '../lib/auth';

export default function Home() {
  const auth = useAuth();
  return (
    <>
      <div className={styles.container}>
        <div className="skyimage">
          <Head>
            <title>613 News</title>
            <link rel="icon" href="/cover.svg" />
            <meta name="theme-color" content="black" />
          </Head>
          <div className={styles.layout}>
            <div className="header">
              <a href="/">
                <img type="image/svg+xml" src="/cover.svg"></img>
              </a>

              <div>
                {auth.user ? (
                  <button onClick={() => auth.signout()}>Log Out</button>
                ) : (
                  <Button />
                )}
              </div>
            </div>
            <div className="writing">
              <div className="section__title">
                <span>What’s new in Ottawa?</span>
              </div>
              <div className="section__description">
                <span>
                  Discover new places in Ottawa by shopping local through a
                  weekly newsletter. Let’s make this city better together.{' '}
                  <a href="/success">Learn More</a>
                </span>
              </div>
              <div className="section__cta">
                <Cta />
              </div>
            </div>
          </div>
        </div>
        <div className="svg">
          {/* <svg
            // height="100vh"
            // width="100vw"
            className="svg1"
            viewBox="0 0 1152 900"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d)" className="svg1">
              <path
                className="svg1"
                d="M0 -15H1152V248V248C1066.15 164.732 924.282 242.419 948.198 359.602L1004.09 633.449C1037.74 798.332 871.818 932.821 717.472 865.768L238.223 657.565C138.995 614.457 57.2456 539.083 6.24046 443.673L0 432V-15Z"
                fill="url(#paint0_linear)"
              />
            </g>
            <defs>
              <filter
                id="filter0_d"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                />
                <feOffset dx="5" dy="5" />
                <feGaussianBlur stdDeviation="54.5" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear"
                x1="576"
                y1="-8.07642e-06"
                x2="576"
                y2="618"
                gradientUnits="userSpaceOnUse"
              >
                <stop />
                <stop offset="1" />
              </linearGradient>
            </defs>
          </svg> */}
        </div>
        <div className="blacksvg"></div>
      </div>
      <style jsx>{`
        .skyimage {
          background-image: url('sky.png');
          background-repeat: no-repeat;
          background-size: cover;
          height: 100%;
        }
        button {
          border-radius: 15.9062px;
          cursor: pointer;
          font-size: 16px;
          border: 2px solid var(--tx1);
          margin: 0.2rem;
          width: 120.08px;
          padding: 0 auto;
          height: 42px;
          font-weight: 400;
          color: var(--bg1);
          background-color: var(--tx1);
          font-family: Noto;
        }
        .header {
          background-color: transparent;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .header img {
          justify-self: left;
          width: 50px;
        }
        .svg {
          position: absolute;
          display: block;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
        }
        .blacksvg {
          position: absolute;
          display: block;
          width: 100vw;
          height: 500px;
          overflow: hidden;
          background-color: black;
        }
        .svg1 {
          position: absolute;
          /* height: 100vh; */
          width: 100vw;
          overflow: hidden;
          display: block;
        }
        .section {
          max-width: 90vw;
        }
        .flex {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
          grid-gap: 2rem;
        }
        .section__cover {
          z-index: 2;
          display: grid;
          place-items: center;
          max-width: 440px; /* background-color: var(--bg1); */
        }

        .writing {
          padding-top: 3rem;

          z-index: 1100;
        }

        .section__title {
          font-weight: 500;
          font-family: Recoleta, EB Garamond, Serif;
          margin: 0;
          font-size: min(24vw, 70px);
          line-height: 90.5%;
          text-align: left;
          color: var(--tx1);
          font-style: normal;
          letter-spacing: -0.055em;
        }

        .section__description {
          padding-top: 2rem;
          font-weight: 340;

          font-size: min(6vw, 28px);
          font-family: Noto;
          font-style: normal;

          line-height: 130.69%;
          text-align: left;
          letter-spacing: -0.08rem;
          color: var(--tx1);
        }

        .section__cta {
          padding-top: 2rem;
        }
        @media only screen and (max-width: 800px) {
          .section {
            max-width: 100vw;
          }

          .svg1 {
            position: absolute;
            width: 300vw;
            overflow: hidden;
            display: block;
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
        }
        @media only screen and (max-width: 450px) {
          .blacksvg {
            position: absolute;
            display: block;
            width: 100vw;
            height: 90vh;
            overflow: hidden;
            background-color: black;
          }
        }
      `}</style>
    </>
  );
}
