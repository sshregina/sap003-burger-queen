import firebase from 'firebase';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDopI3TD2_JDNoGwSn7_1EEM9Ok5Nke07Y",
    authDomain: "burger-queen-1fad9.firebaseapp.com",
    databaseURL: "https://burger-queen-1fad9.firebaseio.com",
    projectId: "burger-queen-1fad9",
    storageBucket: "burger-queen-1fad9.appspot.com",
    messagingSenderId: "85564975055",
    appId: "1:85564975055:web:1ed3230c464a1ef922d4ba"
};

const firebaseImpl = firebase.initializeApp(config);

export default firebaseImpl;