// // primitive data type
// // let s1 = "Chinnu";
// // let s2 = "Chinnu";
// // console.log(s1 == s2);

// // let s3 = Symbol("begum");
// // let s4 = Symbol("begum");
// // console.log(s3 == s4);



// // refernce data type
// const Obj = {
//     name: "chinnu",
// };
// Obj.name = "chotu";
// console.log(Obj);
// console.log(typeof Obj);

// const arr = [10,20,30];
// console.log(typeof arr); // object||array
// console.log(Array.isArray(Obj)); // false
// console.log(Array.isArray(arr)); // true



const mNum = 10;
const mProm1 = new Promise((resolve, reject) => {
    if (mNum >= 10){
        resolve(mNum);
    }else{
        reject(new Error('Number not big enough'));
    }
})
const mProm2 = (data) => new Promise((resolve, reject) =>{
    data = data + 20;
    if(data >= 30){
        resolve(data);
    }else{
        reject(new Error('Data not big enough'));
    }

})
mProm1
    .then(mProm2)
    .then((res)=>{
        console.log(res);
    })
    .then(mProm2)
    .then(response => console.log(response))
    .catch((err) => {
        console.log(err);
    })