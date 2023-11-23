import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loding, setLoding] = useState(true);

  const createUser = (email, password) => {
    setLoding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userlogin = (email, password) => {
    setLoding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const midealogin = () => {
    setLoding(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentuser) => {
      setUser(currentuser);
      setLoding(false);
    });
    return () => {
      unSubscribe;
    };
  }, []);
  const authInfo = {
    user,
    loding,
    createUser,
    userlogin,
    midealogin,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
