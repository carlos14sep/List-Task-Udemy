import firebase from 'firebase/app'
import 'firebase/firestore' 

var firebaseConfig = {
    apiKey: "AIzaSyAhw4rT0cebl4-5jfxJg9H-kHzAdSflPxQ",
    authDomain: "crud-udemy-react-b0ba7.firebaseapp.com",
    projectId: "crud-udemy-react-b0ba7",
    storageBucket: "crud-udemy-react-b0ba7.appspot.com",
    messagingSenderId: "998189994116",
    appId: "1:998189994116:web:02b97da356c4f97e5eb2d1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export {firebase}