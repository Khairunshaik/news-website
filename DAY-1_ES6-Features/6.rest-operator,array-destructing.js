//rest-operator

// function f1(...input){
//     console.log(input);
//     console.log(input[3]);
// }
// f1(10,20,30,40,50);


//array-desturcting
// const arr = [10,20,30,40,50,10,20,30,40,50,10,20,30,40,50,10,20,30,40,50,10,20,30,40,50,];
// const [a,b,c, ...other] = arr;
// console.log(a,b,c);
// console.log(other);


//object destructing
// const Person ={
//     firstname: "Khairunnisa",
//     lastname: "shaik",
//     college: "GIET",
//     branch: "ECE",
//     country: "India",
// };
// const {firstname , lastname} = Person;
// console.log(firstname);
// console.log(lastname);


//destructing-function-parameters
const Person ={
    firstname: "Khairunnisa",
    lastname: "shaik",
    college: "GIET",
    branch: "ECE",
    country: "India",
};
function f1({firstname,lastname,college, country = "US"},age,job= "developer"){
    console.log(firstname);
    console.log(lastname);
    console.log(country);
    console.log(age);
    console.log(job);
}
f1(Person, 20);