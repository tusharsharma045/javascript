// types of datatypes
// 1 primitive
// 7 types:strings,number,boolean,null,undefinned,symbol,bigint


const score= 100
const scorevalue= 100.32

const isloggedin= false
const outsideTemp = null
let userEmail;
const Id= Symbol('123')
const AnotherId = Symbol('123')
console.log(Id===AnotherId);

const bigNumber=343567654567654356454567654n
console.log(typeof bigNumber);

// 2reference(non primitive)
// array ,objects,functions

const heroes =["shaktiman","naagraaj","doga"]
let  myobj={
    name:hitesh,
    Age:43,
}

const myfunction =function() {
    console.log("hello world")
    
}


//-----------------------------------------------//

//stack(primitive),heap(non-primitive) memory