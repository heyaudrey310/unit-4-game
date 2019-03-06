$(document).ready(function () {
    var targetNumber = ""; //generated number to guess
    var win = 0;
    var loss = 0;
    var priorNumber = "";
    var counter = 0;
    var randomNumber = "";


    console.log("win");
    console.log("loss");
    console.log("targetNumber");
    console.log("priorNumber");
    console.log("counter");

    //To Click on any of the crystals
    $(".crystal-image").on("click", function () {
        console.log($(this).attr('data-random')); //getting the value
    });

    //random number is supposed to generate after seleccting crystal so it doesn't goes past 100.
    targetNumber = Math.floor(Math.random() * 69) + 30;
    console.log(targetNumber);

    counter = 0;
    var crystal = [$(".crystal1"), $(".crystal2"), $(".crystal3"), $(".crystal4")];
    $("#result").html('Random Result: ' + randomNumber);


    for (var i = 0; i < targetNumber.length; i++) {

        //random number generated when clicking crystal should be no greater than 10.
        var targetNumber = Math.floor(Math.random() * 9) + 1;
        console.log(targetNumber);

        var crystals = $("<img>");
        // crystals.attr({
        //     "class": 'crystal-image',
        //     "data-random": randomNumber
        // });
        var crystals = ($(this).attr("data-random"));
        crystals = parseInt(crystals);
        counter += crystals;
        console.log(crystals);


        $("#crystal-image").append(crystals);

    }

    $("#prior").html("Total Score: " + priorNumber);
    console.log(priorNumber);

    //when a crystal is pressed
    $(document).on("click", ".crystal-image", function () {
        console.log("crystal-image");
    })

    //an alert will appear if you win or lose, and game should restart.
    alert("New score: " + counter);

    if (priorNumber > targetNumber) {
        alert("Aw, sorry. You lose!!");
        loss++;
        this.restartGame();
    }

    else if (priorNumber === targetNumber) {
        alert("Congrats! You've won!!");
        wins++;
        this.restartGame();
    }
});


//There are four crystals below. 
//Random number will be given at the start of the game.
//Each crystal needs to have a random number between 1-10.
//By clicking on a crystal you will add a specific amount of points to your total score.
//The total score should equal to the targeted guess.
//If total score is greater than the targeted guess,  then we implement a loss counter.
//If it equals to targeted guess, then we implement a win counter.