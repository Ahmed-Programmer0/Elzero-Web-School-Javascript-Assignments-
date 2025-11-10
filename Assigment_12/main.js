let num = 3;

//First Way
// console.log(num + num); //6

//Second Way
// console.log(num * --num);//6

//Third Way
// console.log(num * num - num);//6

//Fourth Way
// console.log((++num * --num) / --num);//6

// Fifth Way
//console.log(++num + num - --num + --num - --num);//6

//Sixth Way
console.log(((num + num) * (num + num)) / (num + num)); //6
