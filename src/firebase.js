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
export const firestore = firebase.firestore();
export const signInWithGoogle = () => {
  //initialise google provider
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  //ask user to select google account using a new pop up window
  auth.signInWithPopup(googleProvider);
};

export const signOut = () => {
  auth.signOut();
};

export const createOrGetUserProfileDocument = async (user) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;

    try {
      const user = {
        display_name: displayName,
        email,
        photo_url: photoURL,
        created_at: new Date(),
      };
      await userRef.set(user);
    } catch (error) {
      console.log('Error', error);
    }
  }

  return getUserDocument(user.uid);
};

async function getUserDocument(uid) {
  if (!uid) return null;

  try {
    const userDocument = await firestore.collection('user').doc(uid);
    return userDocument;
  } catch (error) {
    console.error('Error in getUserDocument', error.message);
  }
}
