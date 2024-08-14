let greeting: string = "Hello Hitesh";
let myNum: number = 6;
greeting.toUpperCase();
console.log(greeting);

//number
let userId: number = 334455;
console.log(userId);

//boolean
let isLoggedIn: boolean = false;

let hero: string;

function getHero(){
    return "thore"
}

hero = getHero();

//funtions
function addTwo(num: number): number{
    return num + 2
}

function getUpper(val: string){
    return val.toUpperCase()
}

getUpper("sin")

addTwo(5);
console.log(addTwo(5))

function signUpUser(name: string, email: string,ispaid: boolean){

}
signUpUser("sinc","olajuwon@hmail.com",false);

let loginUser = (name: string, email: string, ispaid: boolean = false) => {

}
loginUser("h", "h.com")

let addFive = (num: number) => {
    return num+ 5
}
let doing: number = addFive(10);
console.log(doing)

let greetings = (vale : string) => {
    return "Hello Sinclair " + vale;
}

let user = (name: string, userId:number) => {
    return name + " is " + userId; 
}

console.log(user("Sinclair", 13));

console.log(greetings("Good Afternoon"))

function getValue(myVal: number){
    if (myVal > 5){
        return true
    }
    return "200 0k"
}

const getHello = (s: string):string => {
    return ""
}

const  heros = ["thor", "Spiderman", "Ironman"]

console.log(heros.map((hero): string => {
    return `hero is ${hero}`
}))

//object
const User = {
    name: "Hitesd",
    email: "Hitesh@gmail",
    isActive: true
}

function createUser({name: string, isPaid: boolean}){

}
createUser({name: "sinclair", isPaid: false})

function createCourse():{name: string, price: number, email?: string}{
return {name: "reat", price: 399}
}
console.log(createCourse());


export {}