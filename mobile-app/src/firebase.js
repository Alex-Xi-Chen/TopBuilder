import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAhDaoO95tFmXdwjEGVYdj8K-5g8Sw6DOY",
  authDomain: "topbuilder-home.firebaseapp.com",
  projectId: "topbuilder-home",
  storageBucket: "topbuilder-home.firebasestorage.app",
  messagingSenderId: "567819028310",
  appId: "1:567819028310:web:1d5d2f909708b5e8ab78f7"
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
