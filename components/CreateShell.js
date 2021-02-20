import styles from '../styles/Home.module.css';
import { useForm } from 'react-hook-form';
import { Button } from './Button';

import { useToast } from '@chakra-ui/react';

import { createSite } from '@/lib/db';
import { useAuth } from '@/lib/auth';

export const CreateShell = () => {
  const toast = useToast();
  const auth = useAuth();
  const { handleSubmit, register } = useForm();

  const onCreateSite = (values) => {
    createSite(values);
    toast({});
  };

  return (
    <>
      <div className={styles.container}>
        <div className="galleryShell">
          <form
            className="shell-content"
            as="form"
            onSubmit={handleSubmit(onCreateSite)}
          >
            <input
              className={styles.h22}
              placeholder="Create"
              name="name"
              autoComplete="off"
              maxLength="25"
              ref={register({
                required: 'Required',
              })}
            />
            <input
              className={styles.p22}
              placeholder="https://website.com"
              name="url"
              autoComplete="off"
              maxLength="20"
              ref={register({
                required: 'Required',
              })}
            />

            <button type="submit" value="validate">
              <span>Create</span>
            </button>
          </form>
        </div>
      </div>
      <style jsx>{`
        .section {
          max-width: 90vw;
          height: 100vh;
        }
        .galleryShell {
          background: rgba(197, 197, 197);
          border-radius: 10px;
          max-width: 600px;
        }
        .shell-content {
          padding: 5vw;
        }

        input {
          cursor: pointer;
          background: rgba(197, 197, 197);
          outline: none;
          border: none;
          width: 100%;
        }
        input:focus {
          outline: none;
        }
        button {
          display: inline-block;
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
