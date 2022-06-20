import { enableIndexedDbPersistence, getFirestore } from "firebase/firestore";

import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCDKeQmDLQk59CzkWeMZ-VcbOzFiftA6vA",
  authDomain: "ccvq-2022.firebaseapp.com",
  databaseURL:
    "https://ccvq-2022-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ccvq-2022",
  storageBucket: "ccvq-2022.appspot.com",
  messagingSenderId: "387021510263",
  appId: "1:387021510263:web:fe65ffe44f99eeeb1bd872",
  measurementId: "G-7Z79TNMWDX",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const storage = getStorage(firebaseApp);

enableIndexedDbPersistence(db, { forceOwnership: false });
