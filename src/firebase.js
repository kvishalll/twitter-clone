import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyC0oqg14BjWdapw5g6Oz05D5JqNRxYghWs",
  authDomain: "twitter-clone-c486d.firebaseapp.com",
  projectId: "twitter-clone-c486d",
  storageBucket: "twitter-clone-c486d.appspot.com",
  messagingSenderId: "558745989985",
  appId: "1:558745989985:web:9ea31561117a3563a20b20",
  measurementId: "G-HH86NTSRC9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()

  export default db;
