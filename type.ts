// const User = {
//     name: "so",
//     userId: 12
// }

// let greeting: string= "Caleb";

// let heros = ["Superman","Batman", "Ironman","Thor"]

// console.log(heros.map((hero):string => {
//     return `He is a ${hero}`
// }))

// let addFive = (myVal: number) => {
//     return myVal + 5
// }
// console.log(addFive(199))

type User = {
    name: string;
    email: string;
    isActive: boolean
}


function createUser(user: User){
    return {name: "", email: "", isActive: false}
}


type Users = {
    readonly _id: string
    name : string
    email: string
    isActive: boolean
    creditCardDetalils?: cardDetails
}

type cardNumber = {
    card:number
}

type supp = {
    cardDate: number
}
type cardDetails = cardNumber & supp & {
    cvv: number
}
//array
let heros: string[] = ["Spiderman"]
heros.push("Batman")
console.log(heros)

let heroPower : Array<number> = []

type Person = {
    name: string
    isActive: boolean
}

const people: Person[] = []

people.push({name: "Sinclair", isActive: true})

console.log(people)

//union
let score: number | string = 33

type Admin = {
    name: string
    id: number
}

function getDbId(id: number | string){
    if (typeof id === "string"){
        id.toLocaleUpperCase()
    }
}

const data: string[] | number[] = [1, 2, 3, 4]

const datas: (string | number | boolean)[] = ["a", 23, true]

let seatAlotment: "aisle"| "middle" | "crew"

seatAlotment = "aisle"

//tuples

export{}

