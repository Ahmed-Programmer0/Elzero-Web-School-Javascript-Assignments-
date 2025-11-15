// e Small from Elzero String For 6 Times
let userName = "Elzero";

// Solution One
console.log(userName[0].toLowerCase());

// Solution Two
console.log(userName.charAt(0).toLowerCase());

// Solution Three
console.log(userName.substr(0, 1).toLowerCase());

// Solution Four
console.log(userName.slice(0, 1).toLowerCase());

// Solution Five
console.log(userName.substring(0, 1).toLowerCase());

// Solution Six (The Difference is Getting eee not Single e)
console.log(userName.substring(1, 0).toLowerCase().repeat(3));
