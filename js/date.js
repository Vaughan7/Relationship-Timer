var dv = document.getElementById("content");
dv.style.opacity = 0;
var val = 0;

function timer() {
	const start = new Date(2024, 2, 1, 0, 18); // March 1, 2024 at 00:18
	const now = new Date();

	// Total time difference in ms and days
	const diff = now - start;
	const totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));

	// Break down into years, months, weeks, and days
	let tempDate = new Date(start);
	let years = 0, months = 0;

	// Calculate full years
	while (new Date(tempDate.getFullYear() + 1, tempDate.getMonth(), tempDate.getDate()) <= now) {
		tempDate.setFullYear(tempDate.getFullYear() + 1);
		years++;
	}

	// Calculate full months
	while (new Date(tempDate.getFullYear(), tempDate.getMonth() + 1, tempDate.getDate()) <= now) {
		tempDate.setMonth(tempDate.getMonth() + 1);
		months++;
	}

	// Remaining time in days
	const remainingMs = now - tempDate;
	const remainingDays = Math.floor(remainingMs / (1000 * 60 * 60 * 24));
	const weeks = Math.floor(remainingDays / 7);
	const days = remainingDays % 7;

	// Format current time
	const h = String(Math.floor(diff / 1000 / 60 / 60 % 24)).padStart(2, "0");
	const m = String(Math.floor(diff / 1000 / 60 % 60)).padStart(2, "0");
	const s = String(Math.floor(diff / 1000 % 60)).padStart(2, "0");

	// Inject into HTML
	document.getElementById("total").innerHTML = totalDays;
	document.getElementById("y").innerHTML = years;
	document.getElementById("mo").innerHTML = months;
	document.getElementById("w").innerHTML = weeks;
	document.getElementById("d").innerHTML = days;
	document.getElementById("h").innerHTML = h;
	document.getElementById("m").innerHTML = m;
	document.getElementById("s").innerHTML = s;
}

function fadein() {
	if (val < 1) {
		val += 0.025;
		dv.style.opacity = val;
	} else {
		clearInterval(fadeinInterval);
		if (ok == 2) {
			ok += 1;
		}
	}
}

var fadeInterval;
var fadeinInterval;

timer();
setInterval(timer, 1000);
fadeInterval = setInterval(function () {
	if (ok == 2) {
		clearInterval(fadeInterval);
		fadeinInterval = setInterval(fadein, 50);
	}
}, 50);
