// Assignment Code
var generateBtn = document.querySelector("#generate");
// assignment of numbers and symbols
var number = '1234567890';
var symbol = " !"\'()*&+,-./:$%;<=>?@[]^_`{|}#~"
// assignment of uppercase and lowercase letters
var upper = "QWERTYUIOPASDFGHJKLZXCVBNM"
var lower = "qwertyuiopasdfghjklzxcvbnm"


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
