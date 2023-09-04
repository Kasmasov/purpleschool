
/*
Описание:
Создайте функцию calculate. Функция должна принимать арифметические операции двух чисел в виде строки и возвращать строку с результатом их выполнения.<br />
Функция принимает данные из аргументов и возвращает с помощью return.

Требования
- Решение должно пройти все тесты.
- Калькулятор умеет выполнять операции сложения, вычитания, умножения и деления с двумя числами: a + b, a - b, a * b, a / b. Данные передаются в виде одной строки!
- Калькулятор умеет работать как с арабскими (1,2,3,4,5…), так и с римскими (I,II,III,IV,V…) числами. Оба операнда должны быть либо арабскими, либо римскими.
- Операнды должны лежать в диапазоне от 1 до 10 включительно, без ноля. Ответ может быть больше 10.
- Калькулятор умеет работать только с целыми числами, принимает и возвращает.
- Результат на выходе всегда строка с целым числом. В делении учитываем только целую часть - десятичную отбрасываем, например 2 / 4 = 0,5 - вернём 0.
- Калькулятор умеет работать только с арабскими или римскими цифрами одновременно, при вводе пользователем строки вроде 3 + II калькулятор должен выбросить исключение (ошибку) и прекратить свою работу.
- Поскольку в римской системе счисления нет нуля и отрицательных чисел, то вместо них возвращаем пустую строку. (например I - II = '')
- При вызове калькулятора с неподходящими числами, функция выбрасывает исключение и завершает свою работу.
- При вызове калькулятора со строкой, которая не является математическим примером с одной из арифметических операций, описанных в требовании, приложение выбрасывает исключение и завершает свою работу.
*/

const romanNumbers = ['', 'I', 'V', 'X', 'L', 'C', 'D', 'M'];
const romanToArabicKeys = {
	'I': 1,
	'V': 5,
	'X': 10,
	'L': 50,
	'C': 100,
	'D': 500,
	'M': 1000,
};

function calculator(string) {
	if (!validateString(string)) return;
	let result = '';
	try {
    const stringToArray = string.split(' ');
    const firstOperand = stringToArray.slice(0, 1);
    const secondOperand = stringToArray.slice(-1);
    const operation = stringToArray.slice(1, 2);
    if (hasArrayOnlyArabicNumbers([Number(...firstOperand), Number(...secondOperand)])) {
      result = perfomOperation(
      Number.parseInt(firstOperand, 10),
      Number.parseInt(secondOperand, 10),
      operation.join('')
    )
    } else if (hasArrayOnlyRomanNumbers([...firstOperand.join(''), ...secondOperand.join('')])) {
    const traslationToArabic = RomanToArabic([...firstOperand, ...secondOperand]);
    const getResultOperation = perfomOperation(
      Number.parseInt(traslationToArabic.slice(0, 1).join(''), 10),
      Number.parseInt(traslationToArabic.slice(1, 2).join(''), 10),
      operation.join('')
    );
    result = ArabicToRoman(Number.parseInt(getResultOperation, 10));
		}
	} catch(error) {
			console.error(error);
		}
		return result;
  };

	function validateString(string) {
    let result = false;

		if (!string.trim()) {
			throw new Error('String is empty');
		} else if (string.split(' ').length !== 3) {
			throw new Error('Incoming string has incorrect format!');
		} else if (!['+', '-', '/', '*'].includes(string.split(' ').slice(1,2).join(''))) {
      throw new Error('Operation is not define!');
		} else if (
			  RomanToArabic([...string.split(' ').slice(-1), ...string.split(' ').slice(0, 1)])
				.some((element) => Number.parseInt(element, 10) >= 11 || Number.parseInt(element, 10) < 1)
			) {
				throw new Error('Roman number must be I or more and less then XI');
		} else if (
			[
			string.split(' ').slice(0, 1),
			string.split(' ').slice(-1)
	   	].some((element) => Number.parseInt(element, 10) >= 11 || Number.parseInt(element, 10) < 1 
			)
			) {
			throw new Error('Arabic number must be more then 0 and less then 11');
		} else if (!hasArrayOnlyArabicNumbers(
			  [
			    string.split(' ').slice(0, 1),
				  string.split(' ').slice(-1)
			  ]
			)
			&& !hasArrayOnlyRomanNumbers(
				[
					...string.split(' ').slice(0, 1).join(''),
					...string.split(' ').slice(-1).join('')
				]
			)) {
        throw new Error('Operands must be Arabic numbers or Roman numbers!');
		} else {
			result = true;
		}

		return result;
	}

	function ArabicToRoman(number) {
		if (number <= 0) return '';
		let result = '';
		const letters = [["I","V"],["X","L"],["C","D"],["M",""]];
    const repeats = [
			[],
			[[0,1,0]],
			[[0,2,0]],
			[[0,3,0]],
			[[0,1,1],[0,1,0]],
			[[0,1,1]],
      [[0,1,0],[0,1,1]],
			[[0,2,0],[0,1,1]],
			[[0,3,0],[0,1,1]],
			[[1,1,0],[0,1,0]]
		];
		number
		.toString()
		.split("")
		.reverse()
		.forEach((element, index) => { 
    	repeats[element].forEach((d) => {
  	    result = result.concat (letters[index+d[0]][d[2]].repeat(d[1]))
			})
		});
    return result.split("").reverse().join("");
	}

	function RomanToArabic(array) {
		let result = [0 , 0];
    array.forEach((number, numberIndex) => {
			number.split('').forEach((element, elementIndex) => {
				if (
					(element === 'V' || element === 'X')
					&& number[elementIndex - 1] === 'I'
				) {
          result[numberIndex] -= 2;
				};
				if (
					(element === 'L' || element === 'C')
					&& number[elementIndex - 1] === 'X'
				) {
					result[numberIndex] -= 20;
				}

				if (
					(element === 'D' || element === 'M')
					&& number[elementIndex - 1] === 'C'
				) {
					result[numberIndex] -= 200;
				}
				
				if (
					(element === 'V' && number[elementIndex - 1] === 'V')
				  || (element === 'X' && number[elementIndex - 1] === 'C')
				) {
					throw new Error('Incorrect format Roman number');
				}
				result[numberIndex] += romanToArabicKeys[element]
			})
		});
		return result;
	}

	function perfomOperation(firstOperand, secondOperand, operation) {
		let result = 0;
    switch(operation) {
			case '+':
				result = firstOperand + secondOperand;
				break;
			case '-':
				result = firstOperand - secondOperand;
				break;
			case '*':
				result = firstOperand * secondOperand;
				break;
			case '/':
				result = firstOperand / secondOperand;
				break;
			default: return;
		}
		return Math.floor(result).toString();
	}

	function hasArrayOnlyArabicNumbers(array) {
		return array.every((element) => {
			if(Number.isFinite(Number(element))) {
				return element;
			} return false;
		})
	};

	function hasArrayOnlyRomanNumbers(array) {
		return array.every((element) => {
			if (romanNumbers.includes(element)) {
				return element;
			} return false;
		})
	};

console.log(calculator('1 + 2')); // вернется строка '3'
console.log(calculator('7 - 4')); // вернется строка '3'
console.log(calculator('X - VIII')); // вернется строка 'II'
console.log(calculator('10 - 7')); // вернется строка '3'
console.log(calculator('V - X')); // вернётся строка '' (пустая строка) т.к. в римской системе нет отрицательных чисел
// console.log(calculator('3 % 4')); // вернется строка '3'
// console.log(calculator('I + 1')); // вернётся исключение (ошибка) throws Error т.к. используются одновременно разные системы счисления
// console.log(calculator('I')); // вернётся исключение throws Error т.к. строка не является математической операцией
// console.log(calculator('1 + 1 + 1')); // вернётся исключение throws Error т.к. формат математической операции не удовлетворяет заданию - два операнда и один оператор (+, -, /, *)
console.log(calculator('  ')); // вернётся исключение throws Error т.к. строка пустая