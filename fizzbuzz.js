$(document).ready(function() {
	var limit = 100;
	for (var counter = 1; counter <= limit; counter++) {
		if (counter % 3 == 0) {
		console.log ('fizz');
		}
		else if (counter % 5 == 0) {
		console.log ('buzz');
		}
		else if (counter % 15 == 0) {
		console.log ('fizzbuzz');
		}
		else {console.log(counter);}
	}
});