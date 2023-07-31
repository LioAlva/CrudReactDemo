// import firebase from 'firebase/app'
import firebase from 'firebase/compat/app';
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBAk_a_PO05m0uYO-4OZOboAR2g6_TvasE",
    authDomain: "crud-122c5.firebaseapp.com",
    projectId: "crud-122c5",
    storageBucket: "crud-122c5.appspot.com",
    messagingSenderId: "571769369058",
    appId: "1:571769369058:web:839d7a80ac10a4db5f09bb",
    measurementId: "G-B7EWL6HNP4"
}

export const firebaseApp = firebase.initializeApp(firebaseConfig)