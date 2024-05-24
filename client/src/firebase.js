// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: 'house-manager-7a876.firebaseapp.com',
    projectId: 'house-manager-7a876',
    storageBucket: 'house-manager-7a876.appspot.com',
    messagingSenderId: '986468582587',
    appId: '1:986468582587:web:9f386e03ab7fbcd3e1d59e',
    measurementId: 'G-JVNJ5QVCGY',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
