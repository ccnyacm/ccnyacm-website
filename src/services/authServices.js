import { auth } from '../config/firebaseConfig';

export async  function signInAnymously() {
  try {
    await auth.signInAnonymously();
  } catch (error) {
    throw error;
  }
}