// const Obj = {
//     name: "Khairunnisa",
//     address: "Rajahmundry",
//     country: "India",
// };
// const newObj = {...Obj, salary : 100000};
// console.log(newObj);


const o1 = {Firstname : "Khairunnisa"};
const o2 = {Lastname : "begum"};
const o3 = {...o1 , ...o2}; //ES6
console.log(o3);

//ES5
const o3ES5 = Object.assign(o1 , o2 , {job: "dev"});
console.log(o3ES5);

let keys = Object.keys(o3ES5);
console.log(keys);

let values = Object.values(o3ES5);
console.log(values);

let entries = Object.entries(o3ES5);
console.log(entries);