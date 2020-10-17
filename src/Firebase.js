import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJS4uEz8SphkoytqR4uh9GsbND9ObWz08",
  authDomain: "airbnb-clone-65cb3.firebaseapp.com",
  databaseURL: "https://airbnb-clone-65cb3.firebaseio.com",
  projectId: "airbnb-clone-65cb3",
  storageBucket: "airbnb-clone-65cb3.appspot.com",
  messagingSenderId: "723666289912",
  appId: "1:723666289912:web:8be0080995dff8ebcd670d",
  measurementId: "G-WBLCPJTJPB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
