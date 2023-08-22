//some-tests whether at least one element in the array passes the provided test condition in the function 
//checks if the array contains any negative number
// const arr = [10,23,-43,44,88,-89];
// const result = arr.some((item)=>{
//     console.log(item);
//     return item < 0;
// });
// console.log(result);  //true or false



//every- tests whether all the elements in the array pass the provided function
//checks if the array contains every negative number
// const arr = [-10,-23,-43,-44,-88,-89];
// const result = arr.every((item)=>{
//     console.log(item);
//     return item < 0;
// });
// console.log(result);


//from-creates a new array from an array-like or iterable object
// let s = "KHAIRUNNISABEGUM";
// let arr = Array.from(s);
// console.log(arr);
// const Obj = {
//     a: 10,
//     b: 20,
//     c: 30,
//     d: 40,
//     e:50
// };
// const newArray = Array.from(Object.keys(Obj));
// console.log(newArray);


//reverse - reverse the order of the element in an array

// const arr = [100, -399, 450,465];
// arr.reverse();
// console.log(arr);


//sort - sorts the elements of an array in place and returns the sorted array
const arr = [100, -399, 450,465];
arr.sort();
console.log(arr);
