import firebase from 'firebase/app'
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
  apiKey: 'AIzaSyCrGTdb2D5sjH6NNtjNalOFkW7w6vlohWk',
  authDomain: 'to-do-list-2c671.firebaseapp.com',
  databaseURL: 'https://to-do-list-2c671-default-rtdb.firebaseio.com',
  projectId: 'to-do-list-2c671',
  storageBucket: 'to-do-list-2c671.appspot.com',
  messagingSenderId: '829724638685',
  appId: '1:829724638685:web:af2730457f765a8c5c0a34',
});

export {firebaseConfig as firebase};