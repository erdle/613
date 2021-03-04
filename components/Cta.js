import React from 'react';
import { useState } from 'react';
import { useAuth } from '../lib/auth';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const Cta = () => {
  const auth = useAuth();
  const { register, errors, handleSubmit, watch } = useForm();

  const onSubmit = async (email) => auth.trySignIn(email);
  const router = useRouter();

  return (
    <>
      <div>
        {auth.user ? (
          <div></div>
        ) : (
          <div>
            <button onClick={() => auth.signinWithGoogle()}>
              <img src="/google.png"></img>
              Continue with Google
            </button>
            {/* <span>Email:</span>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                name="email"
                type="email"
                ref={register({
                  required: 'Required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'invalid email address',
                  },
                })}
              />

              <button type="submit" value="validate">
                Sign in
              </button>
            </form> */}
          </div>
        )}

        {/* <div className="secondaryCTA">
          Own a<span className="highlight">local business?</span>
          <Link href="/dashboard">
            <a>About Us</a>
          </Link>
          Get Featured!
        </div> */}
      </div>
      <style jsx>{`
        button {
          height: 53px;
          width: 250px;
          background: none;
          border: 1px solid white;
          border-radius: 18px;
          color: white;
          font-size: 19px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        img {
          max-height: 25px;
          padding-right: 5px;
        }

        .form {
          display: flex;
          place-items: center;
          width: 100%;
          border: 2.71875px solid var(--tx1);
          border-radius: 19.9062px;
          cursor: pointer;
          height: 60.95px;
          max-width: 450px;
        }
        .form__input {
          height: 50px;
          cursor: pointer;
          color: var(--tx1);
          font-size: 18px;
          text-align: center;
          transition: 0.1s;
          font-family: 'Noto';
          border-radius: 15.9062px;
          display: flex;
          flex-grow: 1;
          width: 100%;
          max-width: 62vw;
          border: none;
          box-sizing: border-box;
          background: var(--bg1);
        }
        .form__input:focus {
          /* box-shadow: -1px -1px 4px rgba(0, 0, 0, 0.05),
            1px 1px 4px rgba(0, 0, 0, 0.05); */

          outline: red;
        }

        .form__button {
          border-radius: 15.9062px;
          cursor: pointer;
          font-size: 22px;
          border: 2px solid var(--tx1);
          margin: 0.2rem;
          min-width: 85.08px;
          height: 90%;
          font-weight: 400;
          text-align: center;
          transition: 0.3s;
          background: var(--tx1);
          color: white;
          font-family: Noto;
          transition: 0.5sec;
          color: var(--bg1);
        }

        .form__button:hover {
          background: var(--bg1);
          color: var(--tx1);
        }

        .notification {
          text-align: center;
          font-size: 16px;
          font-family: Courier;
          border-radius: 6px;
        }
        .notification__error {
          color: #d03838;
          margin: 1rem;
          font-size: 16px;
        }
        .notification__success {
          color: #38d09a;
          margin: 0;
        }

        .secondaryCTA {
          padding-top: 2rem;
          font-weight: 300;
          font-family: Noto;
          font-size: min(5vw, 16px);
          font-family: Noto;
          font-style: undreline;
          font-weight: 400;
          line-height: 120.69%;
          text-align: left;
          letter-spacing: -0.03rem;
          color: var(--tx1);
          cursor: pointer;
        }

        .highlight {
          font-weight: 600;
          color: #febb00;
        }
        .secondaryCTA:hover {
          text-decoration-line: underline;
        }
      `}</style>
    </>
  );
};
