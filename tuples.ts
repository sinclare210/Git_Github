// const user:(string | number)[] = [1, "hc"]
//with restriction
let user: [string,number,boolean]

user = ["hello",1,true]

let rgb: [string,number,string]
rgb = ["red",123,"green"]

//alternative
type User = [string, number]

const newUser: User = ["Doings", 112]
newUser[0] = "sinclair"
console.log(newUser)

export{}
