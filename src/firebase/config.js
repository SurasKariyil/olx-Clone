import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBndx6sNGuiWQ0zC7RwvocyZcKtI-iQbO0",
    authDomain: "olx-clone-948a2.firebaseapp.com",
    projectId: "olx-clone-948a2",
    storageBucket: "olx-clone-948a2.appspot.com",
    messagingSenderId: "963311503510",
    appId: "1:963311503510:web:3fb3a01203663dd0531ab7",
    measurementId: "G-G94LLH7F9J"
  };

  export default firebase.initializeApp(firebaseConfig)