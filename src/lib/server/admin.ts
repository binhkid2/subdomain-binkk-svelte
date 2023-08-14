import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { FB_CLIENT_EMAIL, FB_PRIVATE_KEY, FB_PROJECT_ID } from '$env/static/private'
import  * as firebaseAdmin  from 'firebase-admin';

import firebaseAccountCredentials from './service-account.json'
const serviceAccount = firebaseAccountCredentials as firebaseAdmin.ServiceAccount

try {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount)
  });
} catch (err: any) {
  if (!/already exists/u.test(err.message)) {
    console.error('Firebase Admin Error: ', err.stack)
  }
}

export const adminDB = getFirestore();
export const adminAuth = getAuth();