import React from 'react';
import { Button } from './Button';
import styles from '@/styles/Home.module.css';

export const GalleryShell = () => {
  return (
    <>
      <div className="galleryShell">
        <div className="shell-content">
          <div className={styles.h22}>Nothing here yet</div>
          <div className={styles.p22}>
            This is where you will find your favourite businesses
          </div>
          <Button />
        </div>
      </div>
      <style jsx>{`
        .galleryShell {
          background: rgba(197, 197, 197, 0.22);
          border-radius: 10px;
          max-width: 90vw;
        }
        .shell-content {
          padding: 5vw;
        }
      `}</style>
    </>
  );
};
