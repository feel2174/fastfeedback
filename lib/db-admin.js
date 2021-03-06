import { db } from './firebase-admin';
import { compareDesc, parseISO } from 'date-fns';

export async function getAllFeedback(siteId, route) {
  try {
    let ref = await db
      .collection('feedback')
      .where('siteId', '==', siteId)
      .where('status', '==', 'active');
    if (route) {
      ref = ref.where('route', '==', route);
    }
    const snapshot = await ref.get();
    const feedback = [];
    snapshot.forEach((doc) => {
      feedback.push({ id: doc.id, ...doc.data() });
    });

    feedback.sort((a, b) =>
      compareDesc(parseISO(a.createdAt), parseISO(b.createdAt)),
    );

    return { feedback };
  } catch {
    return { error };
  }
}

export async function getAllSites() {
  try {
    const snapshot = await db.collection('sites').get();
    const sites = [];
    snapshot.forEach((doc) => {
      sites.push({ id: doc.id, ...doc.data() });
    });
    return { sites };
  } catch (error) {
    return { error };
  }
}

export async function getSites(siteId) {
  try {
    const doc = await db.collection('sites').doc(siteId).get();
    const site = { id: doc.id, ...doc.data() };

    return { site };
  } catch (error) {
    return { error };
  }
}

export async function getUserSites(userId) {
  try {
    const snapshot = await db
      .collection('sites')
      .where('authorId', '==', userId)
      .get();
    const sites = [];
    snapshot.forEach((doc) => {
      sites.push({ id: doc.id, ...doc.data() });
    });

    return { sites };
  } catch (error) {
    return { error };
  }
}

export async function getUserFeedback(uid) {
  try {
    const snapshot = await db
      .collection('feedback')
      .where('authorId', '==', uid)
      .where('status', 'in', ['active', 'pending'])
      .get();
    const feedback = [];

    snapshot.forEach((doc) => {
      feedback.push({ id: doc.id, ...doc.data() });
    });

    return { feedback };
  } catch (error) {
    return { error };
  }
}
