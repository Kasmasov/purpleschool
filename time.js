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

// console.log(isBirthdayToday(user));

function isAdult (date) {
	const age = 14;
  const today = new Date();
	const birthdayDate = new Date(date);

	if (today.getFullYear() - birthdayDate.getFullYear() > age) {
		return true;
	} else if(today.getFullYear() - birthdayDate.getFullYear() === age) {
    if (today.getMonth() > birthdayDate.getMonth()) {
			return true;
		} else if (today.getMonth() === birthdayDate.getMonth()) {
			if (today.getDate() >= birthdayDate.getDate()) {
				return true;
			}
		}
	}
	return false;
}

console.log(isAdult('2009-08-22'))