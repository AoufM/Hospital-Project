import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyARwjUYAAXE1MBv3fvh_3ctvnEJm2UlQtY",
  authDomain: "college-project-3b233.firebaseapp.com",
  projectId: "college-project-3b233",
  storageBucket: "college-project-3b233.appspot.com",
  messagingSenderId: "829751483567",
  appId: "1:829751483567:web:ea9dff518b9dbaa5a2c85a",
  measurementId: "G-BG4JWY4B90"
};


const app = initializeApp(firebaseConfig);

const auth= getAuth();

export {app,auth};
