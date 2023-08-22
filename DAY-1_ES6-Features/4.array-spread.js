const arr = [100 , 200 ,300];
// const newArr = arr.concat([400 , 500 , 600]);   //es5
// console.log(...arr);
const newArr = [...arr,400 ,500];  //es6
const LatestArr = [...arr , ...newArr , "Chotu" , "Khamrun"];
console.log(LatestArr);