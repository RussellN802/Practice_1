// console.log("Hello World");

/*const russ = "Russ";

let lotto = "00000000";

const arr = ['0','0','0','0','0','0','0','0'];

const obj = {
    name = ["Russ", "N"],
    age = 38,
    gender = "Male",
    classes = ["TECH1101"]
};*/

// console.log(russ);

/*function relationship (bf, gf){
    
    return bf + " is dating " + gf;

}

console.log(relationship("Jeff", "Ashley"));

/*function declaration
function dave (parameters) { 

}

function expression
const janet = function () {

}*/
function addMultiples(num){
    return 5 * num;
}
console.log(addMultiples(8));


function imAlive(w1, w2){
    return w1 + " " + w2;
}
console.log(imAlive("Hello", "World!"));


function colorMe(color){
    return color;
}
console.log(colorMe("red"));


function ninjas(l1, l2, l3, l4){
    return l1 + " " + l2 + " " + l3 + " " + l4;
}
console.log(ninjas("Everybody", "was", "Kung-fu", "fighting"));


function topFiveMovies(m1, m2, m3, m4, m5){
    return "Top 5 Movies are " + m1 + ", " + m2 + ", " + m3 + ", " + m4 + " and " + m5;
}
console.log(topFiveMovies("Vanishing Point", "Eye of the Devil", "Soylent Green", "Death Proof", "Eyes Wide Shut"));


function helpMe(s1, o1){
    return "Is anyone there? " + s1 + "/" + o1 + "/" + s1;
}
console.log(helpMe("...", "---"));


function alphabet(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23, a24, a25, a26){
    return a8 + a5 + a12 + a12 + a15 + " " + a23 + a15 + a18 + a12 + a4 + "!";
}
console.log(alphabet("a", "b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"));


function kph(km, hr){
    return km / hr + " km/h";
}
console.log(kph("360", "3"));


//functions to take 2 parameters and return console log the result using the multiplier *
function ageInDays(years, days){
    return years * days + " days old";
}
console.log(ageInDays("38", "365"));

const multi = (param1, param2) => {
    return param1 * param2;
}
console.log(multi(4, 5));

const multi2 = function (param1, param2){
    return param1 * param2;
}
console.log(multi2(4, 5));

function multiply(param1, param2){
    return param1 * param2;
}
console.log(multiply(4, 5));

//function to add two strings together and return with space between

function words(w1, w2){
    return w1 + " " + w2;
}
console.log(words("Hi", "Roger"));

//function to take guys name and girls name and ? or !
//

function people(name1, name2, punctuation){
    return "Will " + name1 + " give a passing grade to " + name2 + " " + punctuation;
}
console.log(people("Roger", "Russ", "?"));

//---------------------------------------2020-01-23-----------------------------------------------------------------------------------------------------------------------------------

// var person = {
//     fName: "Russ",
//     lName: "N",
//     id   : 802,
//     fullN: function () {
//         return this.lName + ", " + this.fName;
//     }    
// }

// name = person.fullN();
// document.getElementById("p1").innerHTML = this.fName();

function changefont()
            {

                var x = document.getElementById("cn");
                x.style.fontSize = "25px";           
                x.style.color = "red"; 
            }