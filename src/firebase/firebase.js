import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'admin-dashboard-66d13.firebaseapp.com',
  projectId: 'admin-dashboard-66d13',
  storageBucket: 'admin-dashboard-66d13.appspot.com',
  messagingSenderId: '348697027830',
  appId: '1:348697027830:web:1a4b02f7432d33f66478d7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
