import { firestore} from '../config/firebaseConfig';

const db = firestore;
const boardMembers = db.collection('boardMembers');

export async function getAllMembers() {
  try {
    const querySnapshot = await boardMembers.get();
    const members = [];
    querySnapshot.forEach((doc) => {
      if(doc.exists) {
        members.push(doc.data());
      }
    });
    return members;
  } catch (error) {
    throw error;
  }
}

export async function getMemberById(id) {
  try {
    const doc = await boardMembers.doc(id).get();
    if(doc.exists) {
      return doc.data();
    } else {
      throw new Error(`Could not find member with id ${id}`);
    }
  } catch (error) {
    throw error;
  }
}
