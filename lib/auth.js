import React, { useState, useEffect, useContext, createContext } from 'react';
import Router from 'next/router';

import firebase from './firebase';
import { createUser } from './db';

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

function useProvideAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleUser = (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser);

      createUser(user.uid, user);
      setUser(user);
      return user;
    } else {
      setUser(false);
      return false;
    }
  };

  const signinWithGoogle = (redirect) => {
    setLoading(true);
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => {
        handleUser(response.user);
      });
  };

  const trySignIn = async (data) => {
    // If the user is re-entering their email address but already has a code
    if (
      firebase.auth().isSignInWithEmailLink(window.location.href) &&
      !!data.email
    ) {
      // Sign the user in
      firebase
        .auth()
        .signInWithEmailLink(data.email, window.location.href)

        .catch((err) => {
          switch (err.code) {
            default:
              setErrorResponse('lol error has occured');
          }
        });
    } else {
      firebase
        .auth()
        .sendSignInLinkToEmail(data.email, {
          url: 'http://localhost:3000/dashboard',
          handleCodeInApp: true,
        })
        .then((response) => {
          // Save the users email to verify it after they access their email
          window.localStorage.setItem('emailForSignIn', data.email);
          Router.push('/success');
        })

        .catch((err) => {
          switch (err.code) {
            default:
              setErrorResponse('kek  error has occured');
          }
        });
    }
  };

  const signout = () => {
    Router.push('/');
    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(false));
  };

  useEffect(() => {
    // Get the saved email
    const saved_email = window.localStorage.getItem('emailForSignIn');

    // Verify the user went through an email link and the saved email is not null
    if (
      firebase.auth().isSignInWithEmailLink(window.location.href) &&
      !!saved_email
    ) {
      // Sign the user in
      firebase
        .auth()
        .signInWithEmailLink(saved_email, window.location.href)
        .then((response) => {
          handleUser(response.user);
        });
    }
  }, []);

  useEffect(() => {
    const unsubscribe = firebase.auth().onIdTokenChanged(handleUser);

    return () => unsubscribe();
  }, []);

  return {
    user,
    trySignIn,
    signinWithGoogle,
    signout,
  };
}

const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  };
};
