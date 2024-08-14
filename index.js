"use strict";
exports.__esModule = true;
var greeting = "Hello Hitesh";
var myNum = 6;
greeting.toUpperCase();
console.log(greeting);
//number
var userId = 334455;
console.log(userId);
//boolean
var isLoggedIn = false;
var hero;
function getHero() {
    return "thore";
}
hero = getHero();
//funtions
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("sin");
addTwo(5);
console.log(addTwo(5));
function signUpUser(name, email, ispaid) {
}
signUpUser("sinc", "olajuwon@hmail.com", false);
var loginUser = function (name, email, ispaid) {
    if (ispaid === void 0) { ispaid = false; }
};
loginUser("h", "h.com");
var addFive = function (num) {
    return num + 5;
};
var doing = addFive(10);
console.log(doing);
var greetings = function (vale) {
    return "Hello Sinclair " + vale;
};
var user = function (name, userId) {
    return name + " is " + userId;
};
console.log(user("Sinclair", 13));
console.log(greetings("Good Afternoon"));
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "200 0k";
}
var getHello = function (s) {
    return "";
};
var heros = ["thor", "Spiderman", "Ironman"];
console.log(heros.map(function (hero) {
    return "hero is ".concat(hero);
}));
//object
var User = {
    name: "Hitesd",
    email: "Hitesh@gmail",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "sinclair", isPaid: false });
function createCourse() {
    return { name: "reat", price: 399 };
}
console.log(createCourse());
