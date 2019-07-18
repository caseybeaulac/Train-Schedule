$(document).ready(function () {
    console.log("doc is ready!");

    //The core Firebase JS SDK is always required and must be listed first 



  var firebaseConfig = {
        apiKey: "AIzaSyDyy_gyIerPlYxa_Z8xTxYPk4YaNpsD7uQ",
        authDomain: "train-time-4a804.firebaseapp.com",
        databaseURL: "https://train-time-4a804.firebaseio.com",
        projectId: "train-time-4a804",
        storageBucket: "",
        messagingSenderId: "127410394010",
        appId: "1:127410394010:web:99ae5808a2a1bfe7"
    };

    firebase.initializeApp(firebaseConfig);

    var db = firebase.database();

    $("#addTrain").on("click", function (event) {

        var getName = $("#name-input").val().trim();
        var getDestination = $("#destination-input").val().trim();
        var getTime = $("#time-input").val().trim();
        var getFreq = $("#frequency-input").val().trim();

        db.ref().set({
            name: getName,
            destination: getDestination,
            time: getTime,
            frequency: getFreq

        });

    });

});