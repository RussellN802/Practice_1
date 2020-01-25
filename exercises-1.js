// Exercise 1: Find the sum of two numbers using function parameters and return/output the result
function sum(num1, num2){
    return num1 + num2;
}
console.log(sum(1, 2));
// Exercise 2: Divide two numbers from each other using function parameters and return/output the result
function div(num1, num2){
    return num1 / num2;
}
console.log(div(33, 11));
// Exercise 3: Subtract 3 numbers using function parameters and return/output the result
function sub(num1, num2, num3){
    return num1 - num2 - num3;
}
console.log(sub(333, 300, 30));
// Exercise 4: Add two strings together using function parameters and return/output the string as a single string
function words(w1, w2){
    return w1 + " " + w2;
}
console.log(words("Number", "Three"));
// Exercise 5: Write an object for a Animal.
var animal = new Object()
animal.name = "Lion";
animal.species = "P.leo";
animal.genua = "Panthera";
animal.rank = 2;
// Exercise 6: Create a function that asks for a name and returns the name as output
let name = prompt("Please enter your name", "");
alert("Your name is " + name);
// Exercise 7: Why doesn't this work? See question below. You must solve the mystery!!
// How old are you and your wife?
let husbandAge = prompt('How old are you?', 55);
let wifeAge = prompt('How old are you?', 45);
let hAge, wAge;                  //Because it is concatenating husbandAge and wifeAge together as strings
hAge = parseInt(husbandAge);
wAge = parseInt(wifeAge)
// Why doesn't this work? I see 5545 and it should be 100 right? 
alert("You are " + (hAge + wAge) + " years old!"); // You are 100 years old!