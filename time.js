const user = {
    name: 'Valerii',
    birthday: '08/20/2023',
}

function isBirthdayToday (date) {

	const getSummOfDate = (date) => new Date(date).getDate() +  new Date(date).getMonth() + new Date(date).getFullYear();
	const today = getSummOfDate(new Date());
	const dateToBeCheked = getSummOfDate(new Date (date));	
	if (today === dateToBeCheked) return true;

	return false;
}

console.log(isBirthdayToday(user.birthday));