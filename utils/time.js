const user = {
    name: 'Valerii',
    birthday: '08/20/2023',
}

function isBirthdayToday (user) {

	const today = new Date();
	const birthdayDate = new Date(user.birthday);
	if (today.getDate() !== birthdayDate.getDate()) return false;
	if (today.getMonth() !== birthdayDate.getMonth()) return false;

	return true;
}

function isAdult (date, age) {
	const birthdayDate = getDateData(new Date(date));
  const today = getDateData(new Date());
	const isMoreThanAge = (today.years - birthdayDate.years) > age;
	const isYearsEqualAge = (today.years - birthdayDate.years) === age;
	const isMoreMonthsThanBirthday = today.months > birthdayDate.months;
	const isMonthsEqualBirthday = today.months === birthdayDate.months;
	const isDaysMoreOrEqualBirthday = today.days >= birthdayDate.days;

	function getDateData(date) {
		return {
    days: new Date(date).getDate(),
		months: new Date(date).getMonth(),
		years: new Date(date).getFullYear(),
	  }
	}

	if (isMoreThanAge) {
		return true;
	} else if(isYearsEqualAge) {
    if (isMoreMonthsThanBirthday) {
			return true;
		} else if (isMonthsEqualBirthday) {
			if (isDaysMoreOrEqualBirthday) {
				return true;
			}
		}
	}
	
	return false;
}

console.log(isAdult('2009-08-22', 14))