$(document).ready(function() {

    function fizzbuzz(upperLimit) {

        //check the each number and show the results
        function check(counter) {
            //get the upper limit from the user input        
            var msg = "<li>" + counter + "</li>";

            if (counter % 3 == 0) {
                msg = "<li>Fizz</li>";

            }
            else if (counter % 5 == 0) {
                msg = "<li>Buzz</li>";
            }
            else if (counter % 15 == 0) {
                msg = "<li>FizzBuzz</li>";
            }
            return msg;
        }
            //loop through all the numbers and call the check counter function
            for (var counter = 1; counter <= upperLimit; counter++) { 
            
            $('#showResults').append(check(counter));    
            }
     
    }


    /****************************
    Then use the functions
    ****************************/





    var userInputCorrect = true;
    //check if the limit is a number
    while (Math.floor(upperLimit) != upperLimit) {
        var upperLimit = prompt("Your upper limit was not correct. Set it again.");
        userInputCorrect = false;
    }
    //if the user inoput is a number then play the game
    if (userInputCorrect = true) {
        fizzbuzz(upperLimit);
    }

});