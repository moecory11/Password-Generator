// create variables
var generateBtn = document.querySelector("#generate");
  // lowercase array
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// uppercase array
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
// special characters array
var specialcharacters =["!","@","#","$","%","^","&","*","(",")","-","_","=","+","[","]","{","}",":","|",";","<",">",",",".","/","?"]; 
// numbers array
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
// passwordLength
var passwordLength = function() {
  (min >= 8 && max <= 128)
  // possible characters array
  var possibleCharacters = [uppercase, lowercase, specialcharacters, numbers];
}
// Assignment Code
//DO NOT CHANGE THIS CODE
function generatePassword(){
  generateBtn.addEventListener('click', function() {
  var passwordLength = prompt("How long would you like your password");
});
// Display a prompt asking the user for password length
prompt("What character types would you like to include?")
prompt("Do you want to include lowercase?")
prompt("Do you want to include uppercase?")
prompt("Do you want to include numbers?") 
prompt("Do you want to include special characters?")

  
/* 
  
  // variables for responses to confirms/prompts
  // create a variable that will hold the final password

// TODO: match edges cases - is a number && is >=8 , <=128
// TODO: ensure that they answered true to at least on confirm
// display confirms for all different character types (listed in README)
// check IF the user answered true to any of the confirms, add that array to the possible character array
​// want to create a loop for as long as passwordLength
// for each iteration, select a random char out of the possible characters array and add it to the final password variable
​// return the final password from the generatePassword function

//TODO: your code here*/
  return "extraSecretPassword"
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
