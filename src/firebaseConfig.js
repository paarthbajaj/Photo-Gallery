import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBn6ToaCK4of6AWhlBd-RMkirU3ptoqeaE",
  authDomain: "fotogram-741c6.firebaseapp.com",
  projectId: "fotogram-741c6",
  storageBucket: "fotogram-741c6.appspot.com",
  messagingSenderId: "782693392017",
  appId: "1:782693392017:web:a1841d3dd2c146eccce930",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, projectStorage, timestamp };
