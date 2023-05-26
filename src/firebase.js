// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjasdbFm_BIweZK9iXLbD3HG7jijZWGV4",
  authDomain: "blogsupport.firebaseapp.com",
  projectId: "blogsupport",
  storageBucket: "blogsupport.appspot.com",
  messagingSenderId: "2866265611",
  appId: "1:2866265611:web:0523c219eef0c9e7d1910e",
  measurementId: "G-W2KC5T9Z0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);