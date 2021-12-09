// import React, { useState, createContext } from "react";
// export let AuthContextApi = createContext();

// let AuthProvider = ({ children }) => {
//   let [IsAuth, setIsAuth] = useState(true);
//   return (
//     <AuthContextApi.Provider value={IsAuth}>{children}</AuthContextApi.Provider>
//   );
// };
// export default AuthProvider;


// using firebase to update multiple states
import React, { useEffect, useState, createContext } from "react";
import firebase from "./../firebase";
export let AuthContextApi = createContext();

const AuthProvider = ({ children }) => {
  let [state, setState] = useState(null);
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user.emailVerified === true) {
        setState(user);
      } else {
        setState(null);
      }
    });
  }, []);
  return (
    <AuthContextApi.Provider value={state}>{children}</AuthContextApi.Provider>
  );
};

export default AuthProvider;
