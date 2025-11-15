// Some Variables With Some Values To Getting True 3 Times
// The Variables
let word = "Elzero";
// Two Small Letters
let letterZ = "z";
let letterE = "e";
// One Captial Letter
let letterO = "O";

// Make Sure That Letter z in The String And Output Should be True
console.log(word.includes(letterZ));

// Make Sure That Letter E is in The Beginning Of The String And Output Should Be True
console.log(word.startsWith(letterE.toUpperCase()));

// Make Sure That Letter o Is In The End Of The String And Output Should Be True
console.log(word.endsWith(letterO.toLowerCase(), 6));
