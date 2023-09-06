function timer (timeValue) {
	let timeCounter = timeValue;
	timeFormatOptions = {
		minute: '2-digit',
		second: '2-digit',
	}
	const timeFormat = (time) => Intl.DateTimeFormat(navigator.language, timeFormatOptions).format(time);

  const startInterval = setInterval(() => {
		console.log(timeFormat(timeCounter -= 1000));
	}, 1000);

  setTimeout(() => {
		clearInterval(startInterval);
		setTimeout(() => {
			console.log('Your pizza is ready!');
		}, 500);
	}, timeValue)
 
}

timer(5000)