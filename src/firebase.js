// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvCXOHjsLMVP7EJOWuTET0na6mNYGeZ-8",
  authDomain: "snapdeal-4aba6.firebaseapp.com",
  projectId: "snapdeal-4aba6",
  storageBucket: "snapdeal-4aba6.appspot.com",
  messagingSenderId: "194526839154",
  appId: "1:194526839154:web:b587db4a67528cd308ddeb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider()
export {auth,provider}
