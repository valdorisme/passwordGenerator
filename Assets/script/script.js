// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower = document.querySelector(input[name="lower"]);
var upper = document.querySelector(input[name="upper"]);
var number = document.querySelector(input[name="number"]);
var symbol = document.querySelector(input[name="symbol"]);

// creating a function containing password requirements
function generatePassword
// assignment of numbers and symbols
  number = '1234567890';
  symbol = " !"\'()*&+,-./:$%;<=>?@[]^_`{|}#~"
// assignment of uppercase and lowercase letters
  upper = "QWERTYUIOPASDFGHJKLZXCVBNM"
  lower = "qwertyuiopasdfghjklzxcvbnm"
// assigning password length
  var length = prompt('Password must contain 8-128 characters. How many characters would you like to use?')
  length = parseFloat(length)

  if (length<8) {
    alert("Password must be at least 8 characters long");
    return "";
  }

  if (length>128) {
    alert("Your password is too long. Must contain 128 characters or less.");
    return "" 
  }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // Creating if statements to ensure required characters are in the password

  if (generatePassword.number not in password)
    alert("Your password should contain a number")

  if (generatePassword.symbol not in password)
    alert("Your password should contain a symbol")

  if (generatePassword.upper not in password)
    alert("Your password should contain an uppercase letter")

  if (generatePassword.lower not in password)
    alert("Your password should contain a lowercase letter")
    
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

console.log(writePassword);

