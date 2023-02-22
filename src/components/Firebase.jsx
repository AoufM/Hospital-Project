import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import{
  collection,
  doc,
  getDocs,
  getFirestore
} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyARwjUYAAXE1MBv3fvh_3ctvnEJm2UlQtY",
  authDomain: "college-project-3b233.firebaseapp.com",
  projectId: "college-project-3b233",
  storageBucket: "college-project-3b233.appspot.com",
  messagingSenderId: "829751483567",
  appId: "1:829751483567:web:ea9dff518b9dbaa5a2c85a",
  measurementId: "G-BG4JWY4B90"
};

// initializing app

const app = initializeApp(firebaseConfig);

// getting the authentication
const auth= getAuth();


// getting the databse
const db= getFirestore();

//collection reference
const docRef= collection(db, "doctor's appointment")

// getting collection data

 const showDocRef= getDocs(docRef)
   .then((snapshot)=>{
    let appointments= []
    snapshot.docs.forEach((doc)=>{
      appointments.push({ ...doc.data(), id:doc.id })
    })
    console.log(appointments)
   })
   .catch(err=>{
    console.log(err.message)
   })



export {app,auth,db,docRef, showDocRef};
