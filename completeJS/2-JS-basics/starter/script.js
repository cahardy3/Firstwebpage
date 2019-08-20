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
/*
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
*/
/*
var firstName = 'John';
var age = prompt ('what is John\'s age');

var drink = age >= 18 ? 'Beer' : 'Juice';
console.log (firstName + ' drinks ' + drink);
*/
/*
var firstName = 'John';
var job = prompt ('what is John\'s Job');

switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids');
        break;
    case 'coder':
        console.log(firstName + ' is a pain in my arse');
        break;
    case 'driver':
        console.log(firstName + ' drives me round the bend');
        break;
    default:
        console.log(firstName + ' should get a job');
}
*/

/*
var firstName = 'John';
var age = prompt ('what is John\'s name');


switch (true) {
    case age < 13:
        console.log(firstName + 'is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man');
        break;
    default:
        console.log(firstName + ' is a man ');
}
*/

var johnScorea = parseInt (prompt ( 'what was John\'s team first score'), 10);
var johnScoreb = parseInt (prompt ( 'what was John\'s team second score'), 10);
var johnScorec = parseInt (prompt ( 'what was John\'s team third score'), 10);

var mikeScorea = parseInt (prompt ( 'what was Mike\'s team first score'), 10);
var mikeScoreb = parseInt (prompt ( 'what was Mike\'s team second score'), 10);
var mikeScorec = parseInt (prompt ( 'what was Mike\'s team third score'), 10);

var maryScorea = parseInt (prompt ( 'what was mary\'s team first score'), 10);
var maryScoreb = parseInt (prompt ( 'what was mary\'s team second score'), 10);
var maryScorec = parseInt (prompt ( 'what was mary\'s team third score'), 10);

var johnAverage = (johnScorea + johnScoreb + johnScorec)/3;
var mikeAverage = (mikeScorea + mikeScoreb + mikeScorec)/3;
var maryAverage = (maryScorea + maryScoreb + maryScorec)/3;

switch (true) {
    case johnAverage > mikeAverage && johnAverage > maryAverage:
        console.log('John\'s team wins with average ' + johnAverage + ' mike\'s team got ' + (mikeAverage) + ' mary\'s team got ' + (maryAverage)  );
        break;
    case mikeAverage > johnAverage && mikeAverage > maryAverage:
        console.log('Mike\'s team wins with average ' + mikeAverage + ' john\'s team got ' + (johnAverage) + ' mary\'s team got ' + (maryAverage)  );
        break; 
    case maryAverage > johnAverage && maryAverage > johnAverage:
        console.log('Mary\'s team wins with average ' + maryAverage + ' john\'s team got ' + (johnAverage) + ' mike\'s team got ' + (mikeAverage)  );
        break; 
    default:
    console.log('it is a draw');
}
