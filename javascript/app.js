$(document).ready(function () {
    console.log("doc is ready!");

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
    var currentTime = moment();
    console.log("current time :" + currentTime);
    console.log(moment(currentTime, "X"));
    $("#addTrain").on("click", function (event) {

        var getName = $("#name-input").val().trim();
        var getDestination = $("#destination-input").val().trim();
        var getTime = $("#time-input").val().trim();
        var getFreq = $("#frequency-input").val().trim();

        db.ref().push({
            name: getName,
            destination: getDestination,
            time: getTime,
            frequency: getFreq

        });

    });

    db.ref().on("child_added", function (snapshot) {
        console.log(snapshot.val());

        var snapName = snapshot.val().name;
        var snapDestination = snapshot.val().destination;
        var snapTime = snapshot.val().time;
        var snapFreq = snapshot.val().frequency;

        console.log(snapName);
        console.log(snapDestination);
        console.log(snapTime);
        console.log(snapFreq);

        var converted = moment(snapTime, "HH:mm").subtract(1, "years");
        var difference = moment().diff(moment(converted), "minutes");
        var remainder = difference % snapFreq;
        var away = snapFreq - remainder;
        var next = moment().add(away, "minutes");
        next = moment(next).format("HH:mm");

        var newRow = $("<tr>").append(
            $("<td>").text(snapName),
            $("<td>").text(snapDestination),
            $("<td>").text(snapFreq),
            $("<td>").text(next),
            $("<td>").text(away)
        );

        // Append the new row to the table
        $("tbody").append(newRow);



    });

});