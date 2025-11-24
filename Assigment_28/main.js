// Assigmnent Is for Printing Four Lines In Four Different Conditions For Three Variables
// First Variable Is Number
// Second Variable Is String But It Is Number
// Third Variable Is String But It Is Number
// This Solution Is Dynamic

// The Variables
let num1 = 9;
let str = "9";
let str2 = "20";

// First Line
// If The First Variable Value Is Equal To The Second Variable Value
// To Check For The Value Only We Use ==
if (num1 == str) {
  console.log("{num1} Is The Same Value As {str}");
}

// Second Line
// If The Value Of First Variable Equal The Value Of Second Variable But The Datatype Is Different
// To Check For The Value Only We Use ==
// To Get The Type We Use typeof
// To Check Identical From Type And Value That They Aren't Equal We Use !==
if (num1 == str && typeof num1 !== typeof str) {
  console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}

// Third Line
// If The Value Of First Variable Not Equal The Value Of Third Variable And Also Not The Same Type
if (num1 != str2 && typeof num1 !== typeof str2) {
  console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}

// Fourth Line
// If The Value Of Second Variable Is Not Equal The Value Of Third Variable But They Are The Same Type
if (str != str2 && typeof str === typeof str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Type");
}
