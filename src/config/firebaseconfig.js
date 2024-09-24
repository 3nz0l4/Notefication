import firebase from "firebase"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyB26V22nzW43Wl3ihJpCWAMJjcxL8tjU5g",
    authDomain: "notefication-893e8.firebaseapp.com",
    databaseURL: "https://notefication-893e8-default-rtdb.firebaseio.com",
    projectId: "notefication-893e8",
    storageBucket: "notefication-893e8.appspot.com",
    messagingSenderId: "978825837911",
    appId: "1:978825837911:web:20773faba075f383f5d212"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = firebase.firestore()
  export default databse