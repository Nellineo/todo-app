import firebase from 'firebase'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBNpdruMSwH21zWhVhj50tTLMcWHHoyAPo",
    authDomain: "todos-20663.firebaseapp.com",
    databaseURL: "https://todos-20663.firebaseio.com",
    projectId: "todos-20663",
    storageBucket: "todos-20663.appspot.com",
    messagingSenderId: "770913155936"
  };
  
  const firebaseApp = firebase.initializeApp(config)

  const firestore = firebaseApp.firestore()


  export default firestore