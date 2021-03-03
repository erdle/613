import React from 'react';

export const Button = () => {
  return (
    <>
      <div className="button">
        <span>Join</span>
      </div>
      <style jsx>{`
        .button {
          border-radius: 15.9062px;
          cursor: pointer;
          font-size: 18px;
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
        span {
          height: 100%;
          display: grid;
          place-items: center;
        }
      `}</style>
    </>
  );
};
