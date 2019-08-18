import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAuB539y2-S452u8qQn2lGZsYTQPeNUw-c",
    authDomain: "crwn-db-531f2.firebaseapp.com",
    databaseURL: "https://crwn-db-531f2.firebaseio.com",
    projectId: "crwn-db-531f2",
    storageBucket: "",
    messagingSenderId: "491022837523",
    appId: "1:491022837523:web:857b941299d2564f"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
  