import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      client_email: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
      private_key: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    }),
    databaseURL: 'https://fast-feedback-demo.firebaseio.com',
  });
}

export default admin.firestore();

// admin.initializeApp({
//   credential: admin.credential.applicationDefault(),
//   databaseURL: 'https://fast-feedback-demo.firebaseio.com',
// });
