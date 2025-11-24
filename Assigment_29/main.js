// This Assigment Is For Checking From Numbers And Datatype For Each Variable Against The Other Variable
// The Variables are Two Numbers And One String IT's Value Is Number

// The Variables
let num1 = 10;
let num2 = 30;
let num3 = "30";

// The If Conditions

// First Line With First Condition
// If num3 Value Is Greater Than num1 Value And num3 Type Not Equal num2 Type
if (num3 > num1 && typeof num3 !== typeof num2) {
  console.log(
    "30 Is Larger Than 10 And Type string Not The Same Type As number"
  );
}

// Second Line With Second Condition
// If num3 Value Is Greater Than num1 Value And num3 Type Not Equal num2 Type And num3 Value Equal num2 Value
if (num3 > num1 && num3 == num2 && typeof num3 !== typeof num2) {
  console.log(
    "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same As number"
  );
}

// Third Line With Third Condition
// If num3 Value And Type Not Equal num1 Value And Type And num3 Type Not Equal num2 Type
if (num3 !== num1 && typeof num3 !== typeof num2) {
  console.log(
    "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
  );
}
