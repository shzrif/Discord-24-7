var myVar = "out of function";
function do_something() {
    var myVar = "in of function";
    console.log(myVar);
}
do_something();

// or

var myVar = "out of function";
function do_something() {
    console.log(myVar);
}
do_something();

function run() {
    var a = 15;
    var b = "javascript";
    var c = true;

    console.log("a is " + a + ". b is " + b + " and c is " + c);
}
run();

var emptyObject = {};
var person = {"name": "Clark", "surname": "Kent", "age": "36"};
// for better reading
var person = {
    "name": "Clark",
    "color": "white",
    "doors": 5
}
console.log(person)

var colors = ["Red", "Yellow", "Green", "Orange"];
var cities = ["London", "Paris", "New York"];
console.log(colors)
console.log(colors[0]);
console.log(cities[2]);

var greeting = function(){
    return "Hello World!";
}
console.log(typeof greeting)
console.log(greeting());

const PI = 3.141592653;
const cars = ["Saab", "Volvo", "BMW"];
cars[0] = "Toyota";
cars.push("Audi");
console.log(cars);

var a = 3;
var b = 2;
var x = a * b;

console.log(x);

var c = 3;
x = (a * b) + c;

console.log(x);

x = (a * b) % 5;
console.log(x);

function run(a) {
    var r = a % 5;
    console.log("remainder of a divided by 5 is " + r);
    r = a % 3;
    console.log("remainder of a divided by 3 is " + r);
    r = a % 2;
    console.log("remainder of a divided by 2 is " + r);
}

run(13);

var y = 2;
var z = "2";
console.log(y == z);

((a % 2 == 0) && (b % 2 == 0))