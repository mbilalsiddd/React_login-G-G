import React from 'react'
import {signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from '../config/firebase';


const Google = () => {
  const loginwithgoogle = () => {
    const provider = new GoogleAuthProvider();
    


    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log("user==>",user)
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorCode==>",errorCode)
      });

  }
  return (
    <>
      <h1>Hello google</h1>
      <button onClick={loginwithgoogle}>Google</button>
    </>
  )
}

export default Google
