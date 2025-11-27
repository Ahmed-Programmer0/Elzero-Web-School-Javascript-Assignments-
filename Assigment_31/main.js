// Assigment 31 is About Making Switch Statement For Printing Times For Specific Days
// The Variable is day and You Must delet from it spaces and Make The First Letter Capitail
// Start
let day = "  friday  "; // declare the variable for Switch Statement

// Switch Statement For The Printing Time For Specific Days
/* 
The Expression That I make it , I think that it is general or it is fine
day.trim().charAt(0).toUpperCase() + day.trim().slice(1, day.length).toLowerCase()
I first make trim() to get rid of spaces in it if it exist
then charAt(0) to determine the First letter in it
then toUpperCase() to make it Capital
the + To concantate it With The rest Of the string which is the rest of the day because
What I make before is For The First Letter only 
then After that I start from the beginning again so I used trim()
then slice(1, day.length) Which means I take only from The Second Letter(1) To the last Letter(day.length)
then toLowerCase() To Make The rest Of Letters Lower If The user Enter It Upper
*/
switch (
  day.trim().charAt(0).toUpperCase() +
  day.trim().slice(1, day.length).toLowerCase()
) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday":
  case "Thursday":
    console.log("Appointments From 10:00 AM To 5:00 PM");
    break;
  case "Tuseday":
    console.log("Appoinments From 10:00 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log("Appointments From 10:00 AM To 7:00 PM");
    break;
  default:
    console.log("It's Not A Vaild Day");
}
