const numbers = [1,3,4,6,7,5,4,3]
const heroes = ["shaktiman","tushar","vivek"]

const arr2 = new Array(1,23,4,5,5,3,3,9)

// console.log(numbers[3]);
// numbers.push(3,7)
// numbers.pop()
// console.log(numbers);

// numbers.unshift(23)
// numbers.shift()
// console.log(numbers);
// console.log(numbers.includes[9]);
// console.log(numbers.indexOf[9]);
//  const newArr =numbers.join()
//  console.log(numbers);
//  console.log(newArr);
//  console.log(typeof newArr);
 
 

// /slice and  spice//////////////////////////////////////////////////////////////////
// slice does not affect orignal array but splice affects the array

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);