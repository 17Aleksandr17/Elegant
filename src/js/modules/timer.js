function timer () {
    const endDate = new Date('Jun 7, 2025, 21:05:59');

	const daysEl = document.querySelector('#days');
	const hoursEl = document.querySelector('#hours');
	const minutesEl = document.querySelector('#minutes');
	const secondsEl = document.querySelector('#seconds');

	function updateTimer() {
		const now = new Date();
		const timeDiff = endDate - now;

		if (timeDiff <= 0) {
			daysEl.innerText = "0";
			hoursEl.innerText = "0";
			minutesEl.innerText = "0";
			secondsEl.innerText = "0";
			return;
		}
		const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
		const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

		daysEl.innerText = days < 10 ? '0' + days : days;
		hoursEl.innerText = hours < 10 ? '0' + hours : hours;
		minutesEl.innerText = minutes < 10 ? '0' + minutes : minutes;
		secondsEl.innerText = seconds < 10 ? '0' + seconds : seconds;
	}
	updateTimer ();
	setInterval(updateTimer, 1000);
}

export default timer;

