
alert('');


$(document).ready(function() {
	var limit = 100;
	for (var counter = 1; counter <= limit; counter++) {
		if (counter % 3 == 0) {
		document.write ('fizz');
		}
		else if (counter % 5 == 0) {
		document.write ('buzz');
		}
		else if (counter % 15 == 0) {
		document.write ('fizzbuzz');
		}
		else {document.write(counter);}
	}
});