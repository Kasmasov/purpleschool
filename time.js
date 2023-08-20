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

console.log(isBirthdayToday(user));