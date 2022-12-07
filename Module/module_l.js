
// export {msg , display , person , user}

export default function(){
console.log("Hii Pune..")
}


export let msg = "rushikesh teli"

export function display(){
   console.log("hello everyone")
}


export function person(age){
  return ` my age is ${age} `
}


export class user{
constructor(){
console.log("Class constructor created")
}}


function aru(){
return "Export in another file"};

export {aru} ;