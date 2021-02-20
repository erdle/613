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

  const handleUser = async (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser);

      createUser(user.uid, user);
      setUser(user);
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

  const signout = () => {
    Router.push('/');

    return firebase
      .auth()
      .signOut()
      .then(() => handleUser(false));
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);
    return () => unsubscribe();
  }, []);

  return {
    user,
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

//   const sendSignInLinkToEmail = (email, actionCodeSettings) => {
//     setLoading(true);

//     return firebase
//       .auth()
//       .signInWithEmailLink(email, actionCodeSettings)
//       .then(() => {
//         window.localStorage.setItem('emailForSignIn', email);
//       });
//   };
//

// const actionCodeSettings = {
//   url: 'http://localhost:3000/',
//   handleCodeInApp: true,
// };

// const sendSignInLinkToEmail = (email, actionCodeSettings) => {
//   setLoading(true);
//   return firebase
//     .auth()
//     .signInWithEmailLink(email, actionCodeSettings)
//     .then(() => {
//       window.localStorage.setItem('emailForSignIn', email);
//     });
// };

// if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
//   var email = window.localStorage.getItem('emailForSignIn');
//   if (!email) {
//     email = window.prompt('Please provide your email for confirmation');
//   }
//   firebase.auth().signInWithEmailLink(email, window.location.href)
//     .then((result) => {
//       window.localStorage.removeItem('emailForSignIn');
//     })
//     .catch((error) => {

//     });
// }
