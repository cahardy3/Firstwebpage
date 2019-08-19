/*
var firstName = 'John';
var lastName = 'Smith';
var age = 28;
var fullAge = true;
var job;
job = 'Ghost';
console.log(job);
*/
/*
var firstName = 'John';
var lastName = ('smith');
var age = 28;
var job, isMarried;
job = 'Teacher';
isMarried = false;

age = 'twenty eight';



alert (lastName + ' is a ' + job + " of " + age + ' Years old, is he married?' + ' ' + isMarried);

var lastName =prompt('what is his last name')

alert (lastName + ' is a ' + job + " of " + age + ' Years old, is he married?' + ' ' + isMarried);
*/
/*
var today = new Date();
var year = today.getFullYear();

var yearJohn = year - 28;
var yearMark = year - 33;

console.log (year);
alert (yearJohn)
*/


/*
var today = new Date();
var year = today.getFullYear();
var yearJohn = 2001;
var fullAge = 18;

var isFullAge = year - yearJohn >= fullAge;

console.log(isFullAge);
*/
/*
var markHeight = 1.69;
var johnHeight = 1.95;
var markMass = 78;
var johnMass = 92;

var markBmi = markMass / (markHeight * markHeight);
var johnBmi = johnMass / (johnHeight * johnHeight);
console.log(markBmi, johnBmi);

var highBMI = markBmi > johnBmi;

console.log ( 'Is Mark\'s BMI higher then John\'s? ' + highBMI);
*/

/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
}else {
    console.log(firstName + ' is single!');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
}else {
    console.log(firstName + ' is single!');
}
*/

/*
var markHeight = 1.89;
var johnHeight = 1.95;
var markMass = 78;
var johnMass = 92;

var markBmi = markMass / (markHeight * markHeight);
var johnBmi = johnMass / (johnHeight * johnHeight);
if (markBmi > johnBmi) {
    console.log('Mark is the fatty');
}else {
    console.log('john is the fatty');
}
*/

var firstName = 'John';
var age = prompt ('what is John\'s name');

if (age < 13) {
    console.log(firstName + 'is a boy');
}else if (age >= 13 && age < 20) {
    console.log(firstName + ' is a teenager');
}else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man');
} else if (age >= 30) {
    console.log(firstName + ' is a man ');
}










