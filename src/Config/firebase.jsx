
import { initializeApp } from "firebase/app";
//  import {getAuth} from 'firebase/auth'
 import {getDatabase} from 'firebase/database'
import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAnZf0MKXcRJp2_szgK5Xv0wJBQac12-vQ",
//   authDomain: "olxdata-63c3a.firebaseapp.com",
//   projectId: "olxdata-63c3a",
//   storageBucket: "olxdata-63c3a.appspot.com",
//   messagingSenderId: "235700044454",
//   appId: "1:235700044454:web:8c5b97a53d52351057aa67"
// };

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5diKsLjGUqxUjvkgJj_K6FP5R7VzzW-8",
  authDomain: "devathon-b599a.firebaseapp.com",
  databaseURL: "https://devathon-b599a-default-rtdb.firebaseio.com",
  projectId: "devathon-b599a",
  storageBucket: "devathon-b599a.appspot.com",
  messagingSenderId: "333792099559",
  appId: "1:333792099559:web:433207bfb71682b2fd7642"
};






// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db =getDatabase(app)
const storage=getStorage(app)

export {db,storage}