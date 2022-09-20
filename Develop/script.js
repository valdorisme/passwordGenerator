// Assignment Code
var generateBtn = document.querySelector("#generate");
var length = document.querySelector(input[name="length"]);
var lower = document.querySelector(input[name="lower"]);
var upper = document.querySelector(input[name="upper"]);
var number = document.querySelector(input[name="number"]);
var symbol = document.querySelector(input[name="symbol"]);

// creating a function containing password requirements
function requirements
// assignment of numbers and symbols
  number = '1234567890';
  symbol = " !"\'()*&+,-./:$%;<=>?@[]^_`{|}#~"
// assignment of uppercase and lowercase letters
  upper = "QWERTYUIOPASDFGHJKLZXCVBNM"
  lower = "qwertyuiopasdfghjklzxcvbnm"


function generatePassword() {
  var userInput = window.prompt('How many characters would you like your password to have? Your password should be at least 8 characters and no more than 128 characters')

  var characterLength = parseFloat(userInput)

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
