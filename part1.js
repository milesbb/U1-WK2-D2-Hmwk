/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

let firstname = "miles";
// ^ A string represents text based data, i.e. words, letters, sentences, etc...

let age = "22";
// ^ A number/integer represents a numerical value, similar data types include BigInt (for larger numbers), double , single

let bool = true;
// ^ A boolean represents a true/false value

let noval;
// ^ Undefined variables haven't yet been given a data type or data to hold

let nothing = null;
// ^ A 'null' variable simply has been assigned as 'null', the intended absence of a value



/* EXERCISE 2
 Try to describe what a variable is, in your own words.
*/

// A variable is a container for different data types that in some cases can be changed and in others are unchangable and are meant to be used as constants or in other operations and calculations

/* EXERCISE 3
 Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let sum = 12 + 20;

/* EXERCISE 4
 Create a variable named x and assign to it the number 12.
*/

let y = 12;
// because 'x' is used later on

/* EXERCISE 5
 Create a variable called name and assign to it the string "John Doe".
*/

let name = "John Doe";

/* EXERCISE 6
 Execute a subtraction between the number 12 and the variable x you declared before (which is storing the value 12).
*/

y -= 12;
// because 'x' is used later on

/* EXERCISE 7
 Create two variables: name1 and name2. Assign to name1 the string "john", and to name2 the string "John" (this one has a capital J!)
 Verify that name1 is different from name2 (HINT: check their equality to be false).
 Finally, verify that the equality between name1 and name2 becomes true if both are lowercase (without changing the value of name2).
*/

let name1 = "john";
let name2 = "John";

let difcheck = (name1 === name2);
console.log("============Excercise 7============")
console.log("")
console.log("Are name1 and name2 equal?");
console.log(difcheck.toString());
console.log("")
name2 = "john";
difcheck = (name1 === name2);
console.log("Are name1 and name2 equal now?");
console.log(difcheck.toString());

/* EXERCISE 8
 Create a variable named x, and assign to it a numeric value less than 10.
 Write the code to print the literal value of x (ex.: if x is 1, it should print "one", if x is 5 it should print "five" etc.).
*/

let x = Math.floor(Math.random() * 10);
let numbers = Array("one", "two", "three", "four", "five", "six", "seven", "eight", "nine");
console.log("");
console.log("============Excercise 8============");
console.log("");
console.log("Your random number is " + numbers[x] + ".");


/* EXERCISE 9
 [Extra] Assign a value to a variable using a ternary operator (this topic has not been covered during lesson yet,
 try to search it by yourself, tomorrow morning we'll discuss it together!)
*/

let cat = Boolean(false);
function getCat(cat) {
    return (cat ? "YES" : "NO")
}
let iscat = getCat(cat);
console.log("")
console.log("============Excercice 9============")
console.log("")
console.log("Is that a cat?");
console.log(iscat);
console.log("")
cat = true;
iscat = getCat(cat);
console.log("Is is a cat now?");
console.log(iscat);
