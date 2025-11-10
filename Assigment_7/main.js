let numberOne = 10;
let numberTwo = 20;

//First Line
console.log(numberOne + "" + numberTwo); //Simple Concatenation

//Second Line
console.log(typeof (numberOne + "" + numberTwo)); //Type Of This Concatenation

//Third Line
console.log(`${numberOne}${numberTwo}`); // Template Literals

//Fourth Line
console.log(typeof `${numberOne}${numberTwo}`); // Type Of This Temlate Literals

//Fifth Line With Sixth Line
console.log(numberTwo + "\n" + numberOne); // Two numbers in Two Lines

//Seventh Line With Eightenth Line
console.log(`${numberTwo}
${numberOne}`);
