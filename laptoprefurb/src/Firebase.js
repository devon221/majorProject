import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB1ZUw3gWasEydSr_YCwPor5pxcmM6GrWs",
  authDomain: "techzoneauth.firebaseapp.com",
  projectId: "techzoneauth",
  storageBucket: "techzoneauth.appspot.com",
  messagingSenderId: "160560735204",
  appId: "1:160560735204:web:c23eae770564665d359df1"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);