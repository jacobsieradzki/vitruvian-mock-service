import firebase from 'firebase'

const start = () => firebase.initializeApp({
  apiKey: "AIzaSyAL-cMk5DA8XVwWzhN4wDgo4zPNF50KK_U",
  authDomain: "vitruvian-38478.firebaseapp.com",
  databaseURL: "https://vitruvian-38478-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vitruvian-38478",
  storageBucket: "vitruvian-38478.appspot.com",
  messagingSenderId: "41173608798",
  appId: "1:41173608798:web:1dd3f848352450ace3c7cf",
  measurementId: "G-032XH2YQY0"
});

if (!firebase.apps.length) {
  try {
    start();
  } catch (error) {
    console.log('Firebase admin initialization error', error.stack);
  }
}

export default firebase;