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

  // variable to grab current time
  var currentTime = moment().format();

  // log the current time
  console.log("Current Time is: " + currentTime);

  $("#click-button").on("click", function() {

    event.preventDefault();

    // variables to grab users entry from form fields
    var trainNameForm = $("#trainNameForm").val().trim();
    var destionationForm = $("#destinationForm").val().trim();
    var trainTimeForm = moment ($("#trainTimeForm").val().trim(), "HH:mm").format("HH:mm");
    var frequencyForm = $("#frequencyForm").val().trim();

    // variable to hold inputs
    var newTrain = {
        train: trainNameForm,
        destination: destionationForm,
        first: trainTimeForm,
        frequency: frequencyForm
    };

    // push the new values to the database
    database.ref().push(newTrain);

    console.log(newTrain.train);
    console.log(newTrain.destination);
    console.log(newTrain.first);
    console.log(newTrain.frequency);

  });
