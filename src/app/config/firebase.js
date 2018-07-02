import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDOwRdGw3IhH62tiMcNnnk70vyPwhCADZk",
  authDomain: "revents-208413.firebaseapp.com",
  databaseURL: "https://revents-208413.firebaseio.com",
  projectId: "revents-208413",
  storageBucket: "revents-208413.appspot.com",
  messagingSenderId: "1072864008270"
}

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
