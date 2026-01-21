// filter//////////////

const mynum = [1,2,3,4,5,6,7,8,9,10]

// const newnums = mynum.filter((num) => num > 4)
// console.log(newnums);

// const newnums = mynum.filter((num) =>{ return num > 7})
// console.log(newnums);
newnums = []
mynum.forEach(nums => {
    if (nums > 4) {
        newnums.push(nums) 
    }
    
});
console.log(newnums);
