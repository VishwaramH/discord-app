import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyB0vLmUZlHwS5yAojebufYiQ0o7eN1D7sM",
  authDomain: "discord-clone-b351a.firebaseapp.com",
  databaseURL: "https://discord-clone-b351a.firebaseio.com",
  projectId: "discord-clone-b351a",
  storageBucket: "discord-clone-b351a.appspot.com",
  messagingSenderId: "976463674846",
  appId: "1:976463674846:web:c5ef018c036304f114b14f",
  measurementId: "G-TFBCCWJ5G4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;