let score = true;
console.log("Score is: " + score);
console.log(typeof score);
console.log(typeof (score));
// now conversion
let valueInNumber = Number(score);
console.log("Value in Number: " + valueInNumber);
console.log(typeof valueInNumber);

// if score == true, then valueInNumber will be 1, "23jayant" then valueInNumber will be NaN, and if score == false, then valueInNumber will be 0
let login = "23jayant";
let valueInBoolean = Boolean(login);
console.log("Value in Boolean: " + valueInBoolean);
console.log(typeof valueInBoolean);

// if login == "23jayant", then valueInBoolean will be true, if login == "", then valueInBoolean will be false
// 1-- true, 0-- false, "23jayant" -- true, "" -- false, null -- false, undefined -- false, NaN -- false