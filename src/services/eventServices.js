import { firestore } from '../config/firebaseConfig';

const db = firestore;

/**
 * This function gets all the events in our collection
 */
export async function getEvents() {
  try {
      const now = new Date();
      const querySnapshot = await db.collection('events')
        .where('startDate', '>=', now)
        .get();
      const events = [];
      querySnapshot.forEach((doc) => {
        if (doc.exists) {
          events.push(doc.data());
        }
      });
      return events;
  } catch (error) {
    throw error;
  }
}

/**
 * This function gets first num elements in our events collection
 */
export async function getFirstEvents(num: number) {
  try {
    const now = new Date();
    const querySnapshot = await db.collection('events')
      .where('startDate', '>=', now)
      .limit(num)
      .get();
    // get data from array of Firestore documents
    const events = [];
    querySnapshot.forEach((doc) => {
      if (doc.exists) {
        events.push(doc.data());
      }
    });
    return events;
  } catch (error) {
    throw error;
  }
}

export async function getEventsByDate(date: Date) {
  try {
    // reset time
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    // create next day date
    const nextDay = new Date(date);
    nextDay.setDate(nextDay.getDate() + 1);
    // get Firestore documents that are withing the specified range
    const querySnapshot = await db.collection('events')
      .where('startDate', '>=', date)
      .where('startDate', '<', nextDay)
      .get();
    // get data from array of Firestore documents
    const events = [];
    querySnapshot.forEach((doc) => {
      if (doc.exists) {
        events.push(doc.data());
      }
    });
    return events;
  } catch (error) {
    throw error;
  }
}

export async function getEventById(id: string) {
  try {
    const doc = await db.collection('events').doc(id).get();
    if (doc.exists) {
      return doc.data();
    } else {
      throw new Error(`Then document with id '${id}' does not exist`);
    }
  } catch (error) {
    throw error;
  }
}