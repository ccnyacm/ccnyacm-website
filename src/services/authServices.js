import { auth } from '../config/firebaseConfig';

export async function signIn(email, password) {
  try {
    const result = await auth.signInWithEmailAndPassword(email, password);
    if(result.user) {
      return result.user;
    } else {
      return new Error('An Error Occurred. Please try again later.');
    }
  } catch (error) {
    throw error;
  }
}

export function isSignedIn() {
  const signedIn = auth.currentUser != null;
  return signedIn;
}
 

export async function signOut() {
  try {
    await auth.signOut();
  } catch (error) {
    throw error;
  }
}