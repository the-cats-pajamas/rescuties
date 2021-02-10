import { Auth } from "./firebase";
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

export const signedInCurrentUser = async () => {
    await Auth.onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          return true;
        } else {
          // No user is signed in.
          return false;
        }
      })
}                                                                              