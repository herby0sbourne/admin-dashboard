import { initializeApp } from 'firebase/app';
import { browserSessionPersistence, getAuth } from 'firebase/auth';
import { getFirestore, doc, setDoc, getDoc } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from 'firebase/storage';

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
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

// auth.setPersistence(browserSessionPersistence);

export const createUser = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(db, 'users', `${userAuth.user.uid}`);
  const userSnapshot = await getDoc(userRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth.user;
    delete additionalData.password;

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt: new Date(),
        ...additionalData,
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }

  return userRef;
};

export const uploadFile = (file) => {
  return new Promise((resolve, reject) => {
    const imageName = `${file.name}_${Date.now()}`;
    const storageRef = ref(storage, imageName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    const next = function (snapshot) {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      // setPerc(progress);
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
        default:
          break;
      }
    };

    const error = function (error) {
      console.log(error);
    };

    const complete = function () {
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        resolve(downloadURL);
        // setData((prev) => ({ ...prev, img: downloadURL }));
      });
    };

    uploadTask.on(
      'state_changed',
      next,
      error,
      complete
      // () => {
      //   getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      //     // setData((prev) => ({ ...prev, img: downloadURL }));
      //   });
      // }
    );
  });
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};
