// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9BQ-8TurGBzHNK00P7L9tThEM5S6uT2Q",
  authDomain: "neighborhud-v2.firebaseapp.com",
  projectId: "neighborhud-v2",
  storageBucket: "neighborhud-v2.appspot.com",
  messagingSenderId: "712515941878",
  appId: "1:712515941878:web:8b32e980c309c73a0143d7",
  measurementId: "G-YD0ZLR6PZP",
};

if (!firebase.apps.length) {
  const app = firebase.initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
}

export default firebase;
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const GoogleProvider = new firebase.auth.GoogleAuthProvider();
export const FacebookProvider = new firebase.auth.FacebookAuthProvider();
export const GithubProvider = new firebase.auth.GithubAuthProvider();
