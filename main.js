// Your code goes below:

const makeParagraph = function(sentence) {
	let paragraph = "";
	paragraph = sentence.join(" ");
	return paragraph;
}

const totalScore = function(scores, bonus = 0) {
	let total = 0;
	for (const obj of scores) {
		if ('multiplier' in obj > 0) {
			total += obj.score * obj.multiplier;
		} else {
			total += obj.score;
		}
	}
	return total + bonus;
}

const cipher = function(string) {
	let newString = "";
	for (let i = 0; i < string.length; i++) {
		switch (string[i]) {
		case 'a':
			newString += 'b';
			break;
		case 'b':
			newString += 'c';
			break;
		case 'c':
			newString += 'd';
			break;
		case 'd':
			newString += 'e';
			break;
		case 'e':
			newString += 'f';
			break;
		case 'f':
			newString += 'g';
			break;
		case 'g':
			newString += 'h';
			break;
		case 'h':
			newString += 'i';
			break;
		case 'i':
			newString += 'j';
			break;
		case 'j':
			newString += 'k';
			break;
		case 'k':
			newString += 'l';
			break;
		case 'l':
			newString += 'm';
			break;
		case 'm':
			newString += 'n';
			break;
		case 'n':
			newString += 'o';
			break;
		case 'o':
			newString += 'p';
			break;
		case 'p':
			newString += 'q';
			break;
		case 'q':
			newString += 'r';
			break;
		case 'r':
			newString += 's';
			break;
		case 's':
			newString += 't';
			break;
		case 't':
			newString += 'u';
			break;
		case 'u':
			newString += 'v';
			break;
		case 'v':
			newString += 'w';
			break;
		case 'w':
			newString += 'x';
			break;
		case 'x':
			newString += 'y';
			break;
		case 'y':
			newString += 'z';
			break;
		case 'z':
			newString += 'a';
			break;
		default:
		break;
		}
	}
	return newString;
}

const womensAverageSalary = function(arr) {
	let total = 0;
	let count = 0;
	for (const obj of arr) {
		if (obj.gender === 'female') {
			total += obj.salary;
			count++;
		} 
	} 
	return total / count;
}

const notMarried = function(people) {
	return people.filter(function(person) {
		if (person.status !== 'married') {
			return person;
		}
	})
}

const addToMultiDigitNumbers = function(addend, arr) {
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i].length > 1) {
			newArr.push((Number(arr[i]) + addend).toString());
		} else {
			newArr.push(arr[i]).toString();
		}
	}
	return newArr;
}

// Our code goes below... DO NOT TOUCH.


if (typeof makeParagraph === 'undefined') {
  makeParagraph = undefined;
}

if (typeof totalScore === 'undefined') {
  totalScore = undefined;
}

if (typeof cipher === 'undefined') {
  cipher = undefined;
}

if (typeof womensAverageSalary === 'undefined') {
  womensAverageSalary = undefined;
}

if (typeof notMarried === 'undefined') {
  notMarried = undefined;
}

if (typeof addToMultiDigitNumbers === 'undefined') {
  addToMultiDigitNumbers = undefined;
}

if (typeof Faqtory === 'undefined') {
  Faqtory = undefined;
}


module.exports = {
  makeParagraph,
  totalScore,
  cipher,
  womensAverageSalary,
  notMarried,
  addToMultiDigitNumbers,
  Faqtory,
}
