import { Auth, firebase } from "../firebase";


// Sign Up
export const doCreateUserWithEmailAndPassword = (email, password) =>
  Auth.createUserWithEmailAndPassword(email, password);
// Sign In
export const doSignInWithEmailAndPassword = (email, password) => 
  Auth.signInWithEmailAndPassword(email, password);

// Sign out
export const doSignOut = () => Auth.signOut();
// Password Reset
export const doPasswordReset = (email) => Auth.sendPasswordResetEmail(email);

// Password Change
export const doPasswordUpdate = (password) =>
  Auth.currentUser.updatePassword(password);

  
  // export const rememberMe = (email,password) => {
  //   console.log('persistence :D', firebase.auth.Auth.Persistence.LOCAL)
  //     Auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  //     .then((val) => {
  //       console.log('inside remember me func', val)
  //     // Existing and future Auth states are now persisted in the current
  //     // session only. Closing the window would clear any existing state even
  //     // if a user forgets to sign out.
  //     // ...
  //     // New sign-in will be persisted with session persistence.
  //     return signInWithEmailAndPassword(email, password);
  //   })
  //   .catch((error) => {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //   });
  // }