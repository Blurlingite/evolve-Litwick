

// Get value on input field and set it to a let variable
// The value is treated as a string here
let currentValue = document.getElementById("numOfCandies").value;

// listen to the document with document and look for
// an element that has a certain id with .getElementById
// use onclick since this is a button and perform this function when the button is clicked
document.getElementById("candyButton").onclick = function(){
  giveOneCandy()
};


function giveOneCandy(){

  // convert the string currentValue into an int and then add 1 then set it equal to currentValue
  // currentValue's data type changes from string to int when you assign it an int but doesn't cause an error
   currentValue = parseInt(currentValue) + 1;

   // change the value of the input field to be the number incremented
   document.getElementById("numOfCandies").value = currentValue;
}
