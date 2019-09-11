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
    var destinationForm = $("#destinationForm").val().trim();
    var trainTimeForm = moment ($("#trainTimeForm").val().trim(), "HH:mm").format("HH:mm");
    var frequencyForm = $("#frequencyForm").val().trim();

    // variable to hold inputs
    var newTrain = {
        train: trainNameForm,
        destination: destinationForm,
        first: trainTimeForm,
        frequency: frequencyForm
    };

    // push the new values to the database
    database.ref().push(newTrain);

    console.log(newTrain.train);
    console.log(newTrain.destination);
    console.log(newTrain.first);
    console.log(newTrain.frequency);

    //clear input form fields
    $("#trainNameForm").val("");
    $("#destinationForm").val("");
    $("#trainTimeForm").val("");
    $("#frequencyForm").val("");

  });

  database.ref().on("child_added", function(childSnapshot, prevChildKey){

    console.log(childSnapshot.val());

    // store the snapshots in there own variable
    var trainName = childSnapshot.val().train;
    var trainDestination = childSnapshot.val().destination;
    var trainTime = childSnapshot.val().first;
    var trainFrequency = childSnapshot.val().frequency;

    // variable for conversion of time
    var trainTimeConverted = moment(trainTime, "HH:mm");
    console.log(trainTimeConverted);

    // variable for difference in time
    var timeDifference = moment().diff(moment(trainTimeConverted), "minutes");
    console.log(timeDifference);

    // variable for frequency conversion
    var frequencyMinutes = childSnapshot.val().frequency;
    console.log("What is the frequency in minutes: " + frequencyMinutes);

    // variable for the number of minutes away conversion
    var minutesAway = Math.abs(timeDifference % frequencyMinutes);
    console.log("The train is this many minutes away: " + minutesAway);

    // variable for converting when the next arrival will be
    var nextArrival = moment(currentTime).add(minutesAway, "minutes").format("hh:mm A");
    console.log("The next arriving train is: " + nextArrival);
  })
