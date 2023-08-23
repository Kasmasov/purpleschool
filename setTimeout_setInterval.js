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

function timeBeforeDate (NewYeardate, ref) {

  const startInterval = setInterval(function () {
  const currentDate = new Date();
  const newYearDate = new Date((NewYeardate));
  const timeZoneOffset = currentDate.getTimezoneOffset() * 60 * 1000;
  const getDifferent = newYearDate - currentDate + timeZoneOffset;

  function countForm (number, titles) {
		number = Math.abs(number);
		if (Number.isInteger(number)) {
			const cases = [2, 0, 1, 1, 1, 2];  
			return titles[
				(number % 100 > 4 && number % 100 < 20)
					? 2
					: cases[
						(number % 10 < 5)
							? number % 10
							: 5
					]
			];
		}
		return titles[1];
	};

	if (getDifferent <= 0) {
		clearInterval(startInterval);
		return ref.textContent = 'Новый год уже прошел';
	} else {
		const date = new Date(getDifferent);
		const secondsText = `${date.getUTCSeconds()} ${countForm(date.getUTCSeconds(), ['секунда', 'секунды', 'секунд'])}`
		const minutesText = `${date.getUTCMinutes()} ${countForm(date.getUTCMinutes(), ['минута', 'минуты', 'минут'])}`
		const hoursText = `${date.getUTCHours()} ${countForm(date.getUTCHours(), ['час', 'часа', 'часов'])}`
		const daysText = `${date.getUTCDate() - 1} ${countForm(date.getUTCDate() - 1, ['день', 'дня', 'дней'])}`
		const monthsText = `${date.getUTCMonth()} ${countForm(date.getUTCMonth(), ['месяц', 'месяца', 'месяцев'])}`
    return ref.textContent = `${monthsText}, ${daysText}, ${hoursText}, ${minutesText}, ${secondsText}`
	};
	}, 1000)
		
};

timeBeforeDate('2024-01-01 UTC', timeForNewYear)
