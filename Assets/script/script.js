// Assignment Code
var generateBtn = document.querySelector('#generate')


// creating a function containing password requirements
function generatePassword() {

  // Make four different variables, each consisting of an array of characters
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  //console.log(lowerCase)
  // Even make the integers a string, so they are easier to manage (0-9)
  
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  //console.log(upperCase)
  
  var number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  //console.log(number)
  
  var symbol = [' ', '!', '"', '#', '$', '%', '&', '(', ')', 
  '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', 
  '\'', ']', '^', '_', '`', '{', '|', '}', '~' ];

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

  //Have funtion create random code if length is within defined range
  else (length>8 & length<128)
    return String.random([lowerCase, upperCase, number,symbol])
  

}
//console.log(generatePassword)

// Write password to the #password input

function writePassword(values) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  for (var i = 0; i < values; i++) {
    password += generatePassword();
  }
  return password;
}

  
  
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);







// Creating if statements to ensure required characters are in the password

  // if (generatePassword.number not in password)
  //   alert("Your password should contain a number")

  // if (generatePassword.symbol not in password)
  //   alert("Your password should contain a symbol")

  // if (generatePassword.upper not in password)
  //   alert("Your password should contain an uppercase letter")

  // if (generatePassword.lower not in password)
  //   alert("Your password should contain a lowercase letter")
    