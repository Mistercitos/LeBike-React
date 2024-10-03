// src/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC8UMgw5KvIAtl2N4Ys2DYSsWGMhi4Ui24",
  authDomain: "lebike-1120a.firebaseapp.com",
  projectId: "lebike-1120a",
  storageBucket: "lebike-1120a.appspot.com",
  messagingSenderId: "247298575148",
  appId: "1:247298575148:web:7b728b55c049003cde7a89",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
