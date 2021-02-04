import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBD2TBwNdhWrhRifn_DOS70NbqF1R2buSM',
  authDomain: 'react-slack-clone-8dff1.firebaseapp.com',
  projectId: 'react-slack-clone-8dff1',
  storageBucket: 'react-slack-clone-8dff1.appspot.com',
  messagingSenderId: '338099273440',
  appId: '1:338099273440:web:e010c22495bb8a23a7da85',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const signInWithGoogle = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(googleProvider);
};
