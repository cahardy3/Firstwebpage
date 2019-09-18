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
/*
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
*/
/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
    
}

var ageJohn= calculateAge(1990);
var ageMike= calculateAge(1948);
var ageJane= calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);

function yeatsUntilRet(year, firstName) {
    var age = calculateAge(year);
    var retirment = 65 - age;
    console.log(firstName + ' retires in ' + retirment + ' years')
}
yeatsUntilRet(1990, 'John');
*/
/*
var whatDoYouDo = function (job, firstName) {
    switch(job) {
        case 'teach':
            return firstName + ' teaches bratss';
        case 'nob':
            return firstName + ' pisses me off';
        case 'coder':
            return firstName + ' is a intravert';
        default:
            return firstName + ' smells';
    }
}

console.log(whatDoYouDo('teach', 'John'));
console.log(whatDoYouDo('nob', 'Peter'));
console.log(whatDoYouDo('coder', 'Ben'));
console.log(whatDoYouDo('balls', 'Joel'));
*/
/*
var names = ['John','Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]);
console.log(names.length);

names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);


var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
john.shift();
console.log(john);

console.log(john.indexOf(1990));
*/

/*
var bills = [124, 48, 268];

function tipCalc(bill) {
    var percent;
    if (bill < 50) { 
        percent = .2;
    } else if (bill >= 50 && bill < 200){
        percent =  .15;
    } else {
        percent =  .1;
    }
    return percent * bill;
}

var tips = [tipCalc(bills[0]),
            tipCalc(bills[1]),
            tipCalc(bills[2])];

function totalCalc (tip, bill) {
       return tip + bill;
    
}

var total = [totalCalc(tips[0], bills[0]),
            totalCalc(tips[1], bills[1]),
            totalCalc(tips[2], bills[2])];

console.log(bills)
console.log(tips)
console.log(total)
*/
/*
var john ={
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'bob', 'Emily'],
    job: 'Teacher',
    isMarried: false
};

console.log(john.job);
console.log(john['lastName']);

john.job = 'designer';
john['isMarried'] = true;

console.log(john);

var jane = new Object();
jane.firstName = 'Jane';
jane.lastName = 'Smith';
jane['birthYear'] = '1999';
console.log(jane);
*/
/*
var john ={
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'bob', 'Emily'],
    job: 'Teacher',
    isMarried: false,
    calcAge: function() {
    this.age = 2018 - this.birthYear;
    }
};


john.calcAge();
console.log(john);
*/

/*
var john ={
    fullName: 'John Smith',
    johnHeight: 1.89,
    johnMass: 78,
    calcBmi: function() {
        this.bmi = this.johnMass / (this.johnHeight * this.johnHeight)
        return this.bmi;
    }
};
john.calcBmi();


var mark ={
    fullName: 'Mark Jones',
    markHeight: 1.89,
    markMass: 78,
    calcBmi: function() {
        this.bmi = this.markMass / (this.markHeight * this.markHeight)
        return this.bmi;
    }
};

if (john.calcBmi() > mark.calcBmi()) {
    console.log(john.fullName + ' has a BMI of ' + john.bmi + ' ' +
                mark.fullName + ' has a lower BMI of ' + mark.bmi);
}else if (mark.bmi > john.bmi) {
    console.log(mark.fullName + ' has a BMI of ' + mark.bmi + ' ' +
                john.fullName + ' has a lower BMI of ' + john.bmi);
}else {
    console.log('There BMI scores are the same');
};
*/

/*
for (var i = 0; i < 10; i++) {
    console.log(i)
}




var john = ['John', 'Smith', 1990, 'teacher', false];

for (var i = 0; i < john.length; i++ ) {
    console.log(john[i]);
}
var i =0
while(i < john.length) {
    console.log(john[i]);
    i++;
}
*/
/*
var john = ['John', 'Smith', 1990, 'teacher', false, 'blue'];

for (var i = 0; i < john.length; i++ ) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}


var john = ['John', 'Smith', 1990, 'teacher', false, 'blue'];

for (var i = 0; i < john.length; i++ ) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}


for (var i =john.length - 1; i >= 0; i--) {
    console.log(john[i]);
}
*/

var bill = [124, 48, 268, 180, 42,]
var tips = [];
var total = [];
var percent = 0;


for (var i = 0; i < bill.length; i++ ) {
    if (bill[i] < 50) { 
        percent = .2;
        tips.push(percent * bill[i])
    } else if (bill[i] >= 50 && bill[i] < 200){
        percent =  .15;
        tips.push(percent * bill[i])
    } else {
        percent =  .1;
        tips.push(percent * bill[i])
    }
}


for (var i = bill.length - 1; i >= 0; i--) {
    total[i] = (bill[i] + tips[i]);
}

console.log(bill)
console.log(tips)
console.log(total)

var mBill = [77, 375, 110, 45,]
var mTips = [];
var mTotal = [];
var mpercent = 0;


for (var i = 0; i < mBill.length; i++ ) {
    if (mBill[i] < 100) { 
        mpercent = .2;
        mTips.push(percent * mBill[i])
    } else if (mBill[i] >= 100 && mBill[i] < 300){
        mpercent =  .1;
        mTips.push(percent * bill[i])
    } else {
        mpercent =  .25;
        mTips.push(percent * mBill[i])
    }
}


for (var i = mBill.length - 1; i >= 0; i--) {
    mTotal[i] = (mBill[i] + mTips[i]);
}

console.log(mBill)
console.log(mTips)
console.log(mTotal)
var mtotalTips = 0;
var jtotalTips = 0;

for (i = 0; i < tips.length; i++) {
       var jtotalTips = (tips[i] + jtotalTips);
}

for (i = 0; i < mTips.length; i++) {
    mtotalTips = (mTips[i] + mtotalTips);
}

console.log(mtotalTips / mTips.length)
console.log(jtotalTips / tips.length)




























