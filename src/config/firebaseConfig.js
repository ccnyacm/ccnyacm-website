import firebase from 'firebase';
import 'firebase/database';
import 'firebase/auth';

import { serviceAccount } from './serviceAccount';

export const Firebase = firebase.initializeApp(serviceAccount);
export const auth = Firebase.auth();
export const firestore = Firebase.firestore();

