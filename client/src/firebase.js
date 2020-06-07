import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC_DahvCRFpxVmPVoAxTLoZWM1Nk2Udvcc",
    authDomain: "covid-19-nigeria-aabd7.firebaseapp.com",
    databaseURL: "https://covid-19-nigeria-aabd7.firebaseio.com",
    projectId: "covid-19-nigeria-aabd7",
    storageBucket: "covid-19-nigeria-aabd7.appspot.com",
    messagingSenderId: "579467839953",
    appId: "1:579467839953:web:6734f99d53b2d1a77838f0",
    measurementId: "G-M98G3F430Q"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;