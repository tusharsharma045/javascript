// for of 

// ["","","",""]
// [{},{},{},{},{}]

const array = [1,2,3,45,5]

for (const num of array) {
    // console.log(num);
    
    
}

// let names = ["tussi","tussii"]
// for (const name of names) {
//     console.log(name);
    
    
// }

    

// let names = "hello tussii"
// for (const name of names) {
//     console.log(`each character is ${name}`);
    
    
// }

//////////MAP/////////////

const map = new Map()

map.set("in","india")
map.set("usa","united  states of america")
map.set("jp","japan")

// console.log(map);

for (const key of map) {

    // console.log(key);
    
    
}

for (const [key,value] of map) {
    // console.log(key,':-',value);
    
    
}

// ////objects are not iteratable and  maps are not iterable///////////////////////////////////

const  myobject = {
    'game1' : 'nfa',
    'game2' : "gta"
}
for (const game of myobject) {
    console.log(game);
    
}
