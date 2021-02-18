import firebase from 'firebase';
require('@firebase/firestore')


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAP2rusZh1F76HoGpe2nZjw5JRn6UfT_sE",
  authDomain: "book-santa-8eb0b.firebaseapp.com",
  projectId: "book-santa-8eb0b",
  storageBucket: "book-santa-8eb0b.appspot.com",
  messagingSenderId: "394451236927",
  appId: "1:394451236927:web:30853e37d340605e5e608a",
  measurementId: "G-JTMRLGG7P6"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);




  export default firebase.firestore();

















