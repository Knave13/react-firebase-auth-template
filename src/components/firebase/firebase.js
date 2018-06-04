import * as firebase from 'firebase';

var devConfig = {
    apiKey: "AIzaSyDwkM7Lk2DYIkN5anf_esD3I1bHZ-ecQ9E",
    authDomain: "react-firebase-auth-template.firebaseapp.com",
    databaseURL: "https://react-firebase-auth-template.firebaseio.com",
    projectId: "react-firebase-auth-template",
    storageBucket: "react-firebase-auth-template.appspot.com",
    messagingSenderId: "1059950142254"
};
var prodConfig = {
    apiKey: "AIzaSyDwkM7Lk2DYIkN5anf_esD3I1bHZ-ecQ9E",
    authDomain: "react-firebase-auth-template.firebaseapp.com",
    databaseURL: "https://react-firebase-auth-template.firebaseio.com",
    projectId: "react-firebase-auth-template",
    storageBucket: "react-firebase-auth-template.appspot.com",
    messagingSenderId: "1059950142254"
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
