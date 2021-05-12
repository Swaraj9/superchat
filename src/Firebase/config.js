import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyDO_w-3MeY0mfxJBfTqlxk8gW4pnByanBU",
    authDomain: "superchat-e2c9d.firebaseapp.com",
    projectId: "superchat-e2c9d",
    storageBucket: "superchat-e2c9d.appspot.com",
    messagingSenderId: "853662470254",
    appId: "1:853662470254:web:146836826e236ec817567f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const firestore = firebase.firestore();

export { auth, firestore };
