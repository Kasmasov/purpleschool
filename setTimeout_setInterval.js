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

const timeForNewYear = document.querySelector('#time-for-new-year');

function timeBeforeDate (date) {
	const newYearDate = new Date(date);
	const startInterval = setInterval(() => {
		let counter =  newYearDate - new Date();
		const date = new Date(counter);
		const seconds = date.getSeconds();
		const minutes = date.getMinutes();
		const hours = date.getHours();
		const days = date.getDate()
		const months = date.getMonth();

		function countForm (number, titles) {
			number = Math.abs(number);
			if (Number.isInteger(number)) {
				cases = [2, 0, 1, 1, 1, 2];  
				return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
			}
			return titles[1];
		}

		const secondsText = `${seconds} ${countForm(seconds, ['секунда', 'секунды', 'секунд'])}`
		const minutesText = `${minutes} ${countForm(minutes, ['минута', 'минуты', 'минут'])}`
		const hoursText = `${hours} ${countForm(hours, ['час', 'часа', 'часов'])}`
		const daysText = `${days} ${countForm(days, ['день', 'дня', 'дней'])}`
		const monthsText = `${months} ${countForm(months, ['месяц', 'месяца', 'месяцев'])}`
		
		timeForNewYear.textContent = `${monthsText}, ${daysText}, ${hoursText}, ${minutesText}, ${secondsText}`;

		drawCircle(context, 300, 300, 50, 0, 360, 60);

	}, 1000);

	setTimeout(() => {
		clearInterval(startInterval);
	}, counter);
};

timeBeforeDate('2024-01-01')