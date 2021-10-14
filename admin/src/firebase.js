import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAs2BcN7rlkp_UV0Fam-njYeqMeJ1HKUAs",
  authDomain: "netflix-e8303.firebaseapp.com",
  projectId: "netflix-e8303",
  storageBucket: "netflix-e8303.appspot.com",
  messagingSenderId: "60639165828",
  appId: "1:60639165828:web:bd8949dd0a36eb4d5af1d1",
  measurementId: "G-2FD0NTXHT1",
};

firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()

export default storage;