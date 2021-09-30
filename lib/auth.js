import { useState, useEffect, useContext, createContext } from 'react';
import { createUser } from './db';
import firebase from './firebase';
import cookie from 'js-cookie';
import Router from 'next/router';

const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useProvideAuth();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

const useProvideAuth = () => {
  const [user, setUser] = useState(null);
  const handleUser = (rawUser) => {
    if (rawUser) {
      const user = formatUser(rawUser);
      const { token, ...userWithoutToken } = user;
      createUser(user.uid, userWithoutToken);
      setUser(user);
      cookie.set('fast-feedback-auth', true, {
        expires: 1,
      });
      return user;
    } else {
      setUser(false);
      cookie.remove('fast-feedback-auth');
      return false;
    }
  };

  const signInWithGitHub = () => {
    Router.push('/sites');
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GithubAuthProvider())
      .then((response) => handleUser(response.user));
  };

  const signInWithGoogle = () => {
    Router.push('/sites');
    return firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((response) => handleUser(response.user));
  };

  const signOut = () => {
    return firebase
      .auth()
      .signOut()
      .then(() => {
        Router.replace('/');
        setUser(false);
        cookie.remove('fast-feedback-auth');
      });
  };

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      handleUser(user);
    });
    return () => unsubscribe();
  }, []);

  return {
    user,
    signInWithGitHub,
    signInWithGoogle,
    signOut,
  };
};

const formatUser = (user) => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    token: user._lat,
    provider: user.providerData[0].providerId,
    token: user._lat,
    photoUrl: user.photoURL,
  };
};
