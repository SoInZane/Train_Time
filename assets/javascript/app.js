  var firebaseConfig = {
    apiKey: "AIzaSyDWWf5m_Lcpo2xo1bfuoF_1o_rFKk4z-3g",
    authDomain: "train-time-16df7.firebaseapp.com",
    databaseURL: "https://train-time-16df7.firebaseio.com",
    projectId: "train-time-16df7",
    storageBucket: "train-time-16df7.appspot.com",
    messagingSenderId: "938576926875",
    appId: "1:938576926875:web:fb68887c8e4eb06456ce3e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // variable to reference database
  var database = firebase.database();

  var currentTime = moment().format();

  console.log("Current Time is: " + currentTime);
