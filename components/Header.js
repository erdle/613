import React from 'react';

export const Header = () => {
  return (
    <>
      <div className="header">
        <div className="navigation">
          <div className="button">
            <span>Business Owner</span>
          </div>
          <div className="button">
            <span>Business Owner</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .button {
          border-radius: 29.9062px;
          cursor: pointer;
          font-size: 18px;
          border: 2px solid var(--tx1);
          margin: 0.2rem;
          min-width: 91.08px;
          height: 91.08px;
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
      `}</style>
    </>
  );
};
