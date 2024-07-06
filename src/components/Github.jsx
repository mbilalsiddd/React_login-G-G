import React from 'react'
import {signInWithPopup, GithubAuthProvider } from "firebase/auth";
import auth from '../config/firebase';


const Github = () => {
  const loginwithgithub = () => {
    const provider = new GithubAuthProvider();


   
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
      const user = result.user;
       console.log("user==>",user);
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log( "errorCode==>",errorCode)
      });

  }
  return (
    <>
      <h1>Hello Github</h1>
      <button onClick={loginwithgithub}>Github</button>
    </>
  )
}

export default Github
