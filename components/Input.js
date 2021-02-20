import React from 'react';
import { useForm } from 'react-hook-form';
import { createSite } from '@/lib/db';
import { useAuth } from '@/lib/auth';

export const Input = () => {
  const auth = useAuth();
  const { handleSubmit, register } = useForm();

  const onCreateSite = ({ name, url }) => {
    const newSite = {
      authorId: auth.user.uid,
      createdAt: new Date().toISOString(),
      name,
      url,
      settings: {
        icons: true,
        timestamp: true,
        ratings: false
      }
    };


  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onCreateSite)}>
          <input></input>
          <input></input>
          <button>submit</button>
        </form>
      </div>
    </>
  );
};
