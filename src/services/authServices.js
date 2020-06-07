import { auth } from '../config/firebaseConfig';
import firebase from 'firebase';

export async function signIn(email, password) {
  try {
    // set auth state to be persitent
    await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    // sign in the user
    const result = await auth.signInWithEmailAndPassword(email, password);
    if(result.user) {
      window.localStorage.setItem('signedIn', 'true');
      return result.user;
    } else {
      return new Error('An Error Occurred. Please try again later.');
    }
  } catch (error) {
    throw error;
  }
}

// event listener to listen to chan
auth.onAuthStateChanged((user) => {
  if (user) {
    window.localStorage.setItem('signedIn', 'true');
  } else {
    window.localStorage.setItem('signedIn', 'false');
  }
})

export function isSignedIn() {
  const signedIn = window.localStorage.getItem('signedIn');
  console.log(signedIn)
  return signedIn === 'true';
}
 

export async function signOut() {
  try {
    await auth.signOut();
    window.localStorage.setItem('signedIn', 'false');
  } catch (error) {
    throw error;
  }
}