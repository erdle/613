import React from 'react';

export const Button = () => {
  return (
    <>
      <div className="button">
        <span>Start Exploring</span>
      </div>
      <style jsx>{`
        .button {
          border-radius: 10.9062px;
          cursor: pointer;
          font-size: 18px;
          border: 2px solid var(--tx1);
          margin: 0.2rem;
          width: 150.08px;
          padding: 0 auto;
          height: 45px;
          font-weight: 400;
          color: var(--bg1);
          background-color: var(--tx1);
          font-family: Noto;
        }
        span {
          height: 100%;
          display: grid;
          place-items: center;
        }
      `}</style>
    </>
  );
};
