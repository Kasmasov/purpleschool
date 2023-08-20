function diceRoll(roll) {
  const diceValue = [4, 6, 8, 10, 12, 16, 20];
	const getNumbersRoll = Number.parseInt(roll.replace(/[^0-9]/ig,""), 10);
	const isdiceValue = diceValue.find((value) => value === getNumbersRoll);
	
	if (!isdiceValue) console.log('Dice value is incorrect! Please inter: d4, d6, d8, d10, d16, d20');

	return Math.round(Math.random() * (getNumbersRoll - 1) + 1)
  
};
for (i = 0; i < 50; i++){

	console.log(diceRoll('d10'));
};