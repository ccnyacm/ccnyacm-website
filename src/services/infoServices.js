import { firestore } from '../config/firebaseConfig';

const db = firestore;

export async function getInfo(docId) {
  try {
    const doc = await db.collection('generalInfo').doc(docId).get();
    if (doc.exists) {
      return doc.data();
    } else {
      throw new Error('The requested data doesn\'t exists');
    }
  } catch (error) {
    throw error;
  }
}