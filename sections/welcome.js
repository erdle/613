import React from 'react';
import Image from 'next/image';
import { Count } from '../atoms/Count';
import styles from '../styles/Home.module.css';

export const Welcome = () => {
  return (
    <>
      <div className="welcome center">
        <div className="section__image" n>
          <Image src="/biox.png" width="500" height="510" />
        </div>
        <div className={styles.title}>A Gift that gives back </div>
        <div className={styles.description}>
          Local products. All Proceeds are going towards solving homelessness in
          Ottawa.
        </div>
        <div className="button">
          <Count />
        </div>
      </div>

      <style jsx>{`
        /* .section__image {
          height: 30px;
        } */

        .welcome {
          /* height: 90vh; */
          padding-top: 10vh;
        }

        .section__image {
          display: grid;
          place-items: center;
          width: min(90vw, 500px);
        }

        .center {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .section__title {
          font-weight: 500;
          font-family: Recoleta, EB Garamond, Serif;
          margin: 0;
          font-size: max(8vw, 65px);
          line-height: 80.5%;
          /* or 74px */
          text-align: center;
          letter-spacing: ;
          color: black;
        }

        .section__description {
          display: block;
          font-weight: 300;
          font-family: Noto;
          margin: 2vh 2vw;
          padding: 0 2vw;
          font-size: max(2vw, 25px);
          font-family: Noto;
          font-style: normal;
          font-weight: 300;
          line-height: 119.69%;
          text-align: center;
          /* letter-spacing: -0.09em; */
        }

        .button {
          border-radius: 10px;
          cursor: pointer;
          max-width: 500px;
          min-width: 200px;
          padding: 0.5rem 0.2rem;
          text-align: center;
          transition: 0.3s;
          color: white;
          font-family: Recoleta, EB Garamond, Serif;
          transition: 0.8sec;
          background-color: #e40208;
        }
      `}</style>
    </>
  );
};
