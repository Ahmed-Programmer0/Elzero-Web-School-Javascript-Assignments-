let num = "10";

// Getting number 20 with 5 different Ways

//Solution 1
// console.log(+num + +num);//20

//Solution 2
// console.log(-(-num + -num));//20

//Solution 3
// console.log((+num * +num) / +num + (+num * +num) / +num); //20

//Solution 4
// console.log(-(-num++ + -num) - ((+num-- + +num) % +num));//20

//Solution 5
console.log((+num * +num + (+num % +num) + +num * +num) / +num); //20
