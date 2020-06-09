
/*var interval = setInterval(function() {
	console.log(getRandomIntInclusive(1, 100));
}, 500);

setTimeout(function() {
	clearInterval(interval);
}, 10000);*/

//zegar

var h1 = document.querySelector('h1');
var timeNow = '';
var timeText = '12 : 00 :34';

var clock = setInterval(function() {
	
	timeNow = new Date();
	
	timeText = timeNow.getHours() +
		' : ' +
		timeNow.getMinutes() +
		' : ' +
		timeNow.getSeconds();
	
	h1.textContent = timeText;
	
	
}, 1000);

// KURS






























