let counterWrapper = document.getElementById('counter__wrapper');
let counterEndText = document.getElementById('endText');   
let counterEndTextFr = document.getElementById('endTextFr'); 
const dateId = document.getElementById('counter');
const dateIdFr = document.getElementById('counterFr');
let eventDate = counterWrapper.getAttribute('data-date');
function updateTimer(at, someId) {
future = Date.parse(at);
now = new Date();
diff = future - now;

if(diff >= 0){
days = Math.floor(diff / (1000 * 60 * 60 * 24));
hours = Math.floor(diff / (1000 * 60 * 60));
mins = Math.floor(diff / (1000 * 60));
secs = Math.floor(diff / 1000);
	//add zeros
	function addZero(num) {
		return ("0" + parseInt(num)).substr(-2);
	}
d = addZero(days);
h = addZero(hours - days * 24);
m = addZero(mins - hours * 60);
s = addZero(secs - mins * 60);
if(someId.id === 'counter'){
	someId.innerHTML = `
<span class="counter-number">${d}<br><span class="timer-text">Tage</span></span><span class="counter-number">${h}<br><span class="timer-text">Stunden</span></span><span class="counter-number">${m}<br><span class="timer-text">Minuten</span></span><span class="counter-number">${s}<br><span class="timer-text">Sekunden</span></span>
`
}
if(someId.id === 'counterFr'){
	someId.innerHTML = `
<span class="counter-number">${d}<br><span class="timer-text">Jours</span></span><span class="counter-number">${h}<br><span class="timer-text">Uren</span></span><span class="counter-number">${m}<br><span class="timer-text">Minuten</span></span><span class="counter-number">${s}<br><span class="timer-text">Seconden</span></span>
`
}

}else {
		if(someId.id === 'counter'){
			someId.innerHTML = `<p></p>${counterEndText.innerHTML}<p></p>`;
		}
		if(someId.id === 'counterFr'){
			someId.innerHTML = `<p></p>${counterEndTextFr.innerHTML}<p></p>`;
		}
}
}

if (dateId !== null) {
	setInterval('updateTimer(eventDate, dateId)', 1000);
}
if (dateIdFr !== null) {
	setInterval('updateTimer(eventDate, dateIdFr)', 1000);
}

