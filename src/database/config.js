// initializing firebase
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDbziDwxY1cjFRsYkzBjUegAAedH3UXwxI",
    authDomain: "miniproject-829f7.firebaseapp.com",
    databaseURL: "https://miniproject-829f7.firebaseio.com",
    projectId: "miniproject-829f7",
    storageBucket: "miniproject-829f7.appspot.com",
    messagingSenderId: "652398995591"
  };

firebase.initializeApp(config);
  
const database = firebase.database();

export {database}