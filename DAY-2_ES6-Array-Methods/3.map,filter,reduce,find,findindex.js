//map
//creates a new array with the results of calling a provided function on every element
// const arr = [10,20,30,40];
// let newArr = arr.map((item,index)=>{
//     //console.log(item,index);
//     return item+1+index;
// });
// console.log(newArr);


///////////////////
//filter
//creates a new array with all the elements that pass the test implemented by the provided function
// const arr = [11,20,33,46];
// let newArr = arr.filter((item,index)=>{
//     console.log(item,index);
//     if(item % 2 == 0){
//         return item;
//     }

// });
// console.log(newArr);
// console.log(arr);


////////////////////////
//reduce-reduces the array to a single value by executing a provided function for each element
// const arr = [10,20,30,40];
// let sum = arr.reduce((accumulator,item,index)=>{
//     accumulator = accumulator - item;
//     console.log(index);
//     return accumulator;

// } , 100);
// console.log(sum);



////////////////////////
//find-retruns the value of the first element in the array that satisfies the provided testing function
// const arr = [11,23,35,40];
// const FirstEvennum = arr.find((item)=>{
//     return item % 2 == 0;
// });
// console.log(FirstEvennum);

////////////////////////
//findindex-returns the index of the first element in the array that satisfies the provided testing function
const arr = [11,23,35,40,87,90];
const FirstEvennum = arr.findIndex((item)=>{
    return item % 2 == 0;
});
console.log(FirstEvennum);