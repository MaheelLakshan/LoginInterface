// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA-4gaR6cZjTUgQufWdN5wXZPU-q0V5D-U',
  authDomain: 'logininterface-66356.firebaseapp.com',
  projectId: 'logininterface-66356',
  storageBucket: 'logininterface-66356.appspot.com',
  messagingSenderId: '605917515722',
  appId: '1:605917515722:web:b6eac24d6de9cce57c4933',
  measurementId: 'G-BNG8XY2M5S',
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
// const analytics = getAnalytics(FIREBASE_APP);
