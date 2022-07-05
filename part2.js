// Additional assignments for Day 3
console.log("");
console.log("===================Part 2======================");
console.log("");

/*EX 1
 Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

let isMale = Boolean(true);
let gender = isMale ? "male" : "female";
console.log("============Excercise 1============");
console.log("");
console.log(gender);
console.log("");

/*EX 2
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

let num1 = 10;
let num2 = 2;
let same = (num1 === 8 || num2 === 8);
let add = (num1 + num2 === 8); 
let sub = (num1 - num2 === 8 || num2 - num1 === 8);
console.log("============Excercise 2============");
console.log("");
console.log("One of the numbers is 8?  " + same);
console.log("The addition of the numbers equals 8?  " + add);
console.log("The subtraction of the numbers equals 8?  " + sub);
console.log("");


/*EX 3
 Create a variable and assign to it the concatenation of two strings.
*/

let isTrue = (8 === 8) ? "Eight does in fact equal eight." : "There's something wrong with your PC."
console.log("============Excercise 3============");
console.log("");
console.log(isTrue);
console.log("");

/*EX 4
 Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/

let values = Array(12, 3, 8);
values.sort();
console.log("============Excercise 4============");
console.log("");
for (let i = 0; i < values.length; i++) {
    console.log(values[i].toString());
}
console.log("");

/*EX 5
 Write a piece of code for finding the average of two given integers.
*/

let first = Math.floor(Math.random() * 101);
let second = Math.floor(Math.random() * 101);
let average = (first + second)/2;

console.log("============Excercise 5============");
console.log("");
console.log("The average of " + first.toString() + " and " + second.toString() + " is " + average.toString() + ".");
console.log("");

/*EX 6
 Write a piece of code for finding the longest of two given strings.
*/

let name1 = "John Abernathy Cambridge Sampson";
let name2 = "Adam Molyneaux Bricksford Jackson";
let longest = (name1 > name2) ? "The first name is longer" : "The second name is longer";

console.log("============Excercise 6============");
console.log("");
console.log("Two men are named:");
console.log(name1 + " and " + name2);
console.log("");
console.log(longest + ".");
console.log("");

/*EX 7
 Write a piece of code for checking if a given value is a integer or not.
*/

let checkInt1 = 12;
let checkInt2 = 3.4;
let result1 = (Number.isInteger(checkInt1)) ? " is an integer" : " is not an integer";
let result2 = (Number.isInteger(checkInt2)) ? " is an integer" : " is not an integer";

console.log("============Excercise 7============");
console.log("");
console.log(checkInt1.toString() + result1 + ".");
console.log(checkInt2.toString() + result2 + ".");
console.log("");

/*EX 8
 Write a piece of code for calculating a certain percentage of a given number.
 (Ex.: the 20% of 400 is 80)
*/

let percent = 40;
let target = 500;
let final = target * (percent/100);

console.log("============Excercise 8============");
console.log("");
console.log(percent.toString() + "% of " + target.toString() + " is " + final.toString() + ".");
console.log("");

/*EX 9
 Write a piece of code for checking if a given number is even or odd.
*/

let number1 = 8;
let number2 = 3;
let isEven1 = (number1 % 2) > 0 ? " is an odd number." : " is an even number.";
let isEven2 = (number2 % 2) > 0 ? " is an odd number." : " is an even number.";

console.log("============Excercise 9============");
console.log("");
console.log(number1.toString() + isEven1);
console.log(number2.toString() + isEven2);
console.log("");

// end of part2
console.log("");
console.log("===================End of Part 2======================");