// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB05XV_PNExfGBmKE5GfPfLPcoxNti0NVk",
  authDomain: "login-44132.firebaseapp.com",
  projectId: "login-44132",
  storageBucket: "login-44132.appspot.com",
  messagingSenderId: "1069012899915",
  appId: "1:1069012899915:web:812a63c50a953d91cf95ce"
};

// Initialize Firebase
if (!firebase.apps.length) {
   firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();

export {auth};