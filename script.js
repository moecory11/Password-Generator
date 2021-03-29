// create variables
var generateBtn = document.querySelector("#generate");
// lowercase array
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// uppercase array
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// special characters array
var specialcharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ":", "|", ";", "<", ">", ",", ".", "/", "?"];
// numbers array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// passwordLength
var passwordLength = function () {
  (min >= 8 && max <= 128)
};



// Assignment Code
//DO NOT CHANGE THIS CODE
function generatePassword() {
  var passwordLength = parseInt(prompt("How long would you like your password"));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("try again. Please choose between 8 and 128.")
    return
  }

  // possible characters array
  var possibleCharacters = [];

  // Display a prompt asking the user for password length
  alert("What character types would you like to include?")
  if (confirm("Do you want to include lowercase?")) {
    possibleCharacters = possibleCharacters.concat(lowercase);
  }
  if (confirm("Do you want to include uppercase?")) {
    possibleCharacters = possibleCharacters.concat(uppercase);
  }
if (confirm("Do you want to include numbers?")) {
  possibleCharacters = possibleCharacters.concat(numbers);
}
if (confirm("Do you want to include special characters?")) {
  possibleCharacters = possibleCharacters.concat(specialcharacters);
}
console.log(possibleCharacters);
var results = [];
for (let i = 0; i < passwordLength; i++) {
 var item = possibleCharacters[Math.floor(Math.random() * possibleCharacters.length)]; 
  results.push(item);
}
  console.log(results);
  
  


  /* 
    
    // variables for responses to confirms/prompts
    // create a variable that will hold the final password
  
  // TODO: match edges cases - is a number && is >=8 , <=128
  // TODO: ensure that they answered true to at least one confirm
  // display confirms for all different character types (listed in README)
  // check IF the user answered true to any of the confirms, add that array to the possible character array
   // want to create a loop for as long as passwordLength
  // for each iteration, select a random char out of the possible characters array and add it to the final password variable
   // return the final password from the generatePassword function
  
  //TODO: your code here*/
  return results.join("");
}

// Write password to the #password input

/* DO NOT CHANGE THIS CODE!  This function is going to call your generatePassword() function and whatever is returned from that function will be put onto the page */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// DO NOT CHANGE THIS CODE
generateBtn.addEventListener("click", writePassword);
