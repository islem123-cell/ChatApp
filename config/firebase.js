import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import Constants from 'expo-constants';
// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBvOFJqIjsYSqVQ3uiMzSLbXiKQZErh5VU",
  authDomain: "chatapp-55232.firebaseapp.com",
  projectId: "chatapp-55232",
  storageBucket: "chatapp-55232.appspot.com",
  messagingSenderId: "646582829139",
  appId: "1:646582829139:web:930801fd16d9a703da86a6",
  measurementId: "G-LL8MEQTHFT"
};
// initialize firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();