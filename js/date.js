
var dv = document.getElementById("content");
dv.style.opacity = 0;
var val = 0;

function timer(){
	var start = new Date(2024, 2, 1, 0, 18);
	var now = new Date()
	var t = new Date() - start;
/*
	//days
	var d = Math.floor(t / 1000 / 60 / 60 / 24);

	// Hours
	var h = Math.floor(t / 1000 / 60 / 60 % 24);
	if(h < 10){
		h = "0" + h;
	}

	//Minutes
	var m = Math.floor(t / 1000 / 60 % 60);
	if(m < 10){
		m = "0" + m;
	}

	//Seconds
	var s = Math.floor(t / 1000 % 60);
	if(s < 10){
		s = "0" + s;
	}

*/

	// Step 1: Years and months
	var y = now.getFullYear() - start.getFullYear();
	var mo = now.getMonth() - start.getMonth();
	if (months < 0) {
  		y--;
  		mo += 12;
	}
	
	// Step 2: Adjust start date forward by full years and months
	let temp = new Date(start);
	temp.setFullYear(temp.getFullYear() + y);
	temp.setMonth(temp.getMonth() + mo);

	// Step 3: Remaining time
	let remainingMs = now - temp;
	let totalDays = Math.floor(remainingMs / (1000 * 60 * 60 * 24));
	let w = Math.floor(totalDays / 7);
	let d = totalDays % 7;

	// Step 4: Remaining hours, minutes, seconds
	let h = Math.floor(remainingMs / (1000 * 60 * 60) % 24);
	let m = Math.floor(remainingMs / (1000 * 60) % 60);
	let s = Math.floor(remainingMs / 1000 % 60);


	document.getElementById("y").innerHTML = y;
	document.getElementById("mo").innerHTML = mo;
	document.getElementById("w").innerHTML = w;
	document.getElementById("d").innerHTML = d;
	document.getElementById("h").innerHTML = h;
	document.getElementById("m").innerHTML = m;
	document.getElementById("s").innerHTML = s;
}

function fadein(){
	if(val < 1){
		val += 0.025;
		dv.style.opacity = val;
	}
	else{
		clearInterval(fadeinInterval);
		if(ok == 2){
			ok += 1;
		}
	}
}

var fadeInterval;
var fadeinInterval;

timer();
setInterval(timer, 1000);
fadeInterval = setInterval(function(){
	if(ok == 2){
		clearInterval(fadeInterval);
		fadeinInterval = setInterval(fadein, 50);
	}
}, 50)
