// Assignment Code
var generateBtn = document.querySelector('#generate')

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



// creating a function containing password requirements
function getPasswordOptions() {

  var character = [];

  // assigning password length
  var length = parseInt(
    prompt('Password must contain 8-128 characters. How many characters would you like to use?'),
    10
  );

  // console.log(length)
  //  length = parseFloat(length)

  if (Number.isNaN(length)) {
    alert ("Password length must be a numeric value.")
    return null;
  }

  //charLength = character.length
  if (length<8) {
    alert("Password must be at least 8 characters long");
    return null;
  }

  if (length>128) {
    alert("Your password is too long. Must contain 128 characters or less.");
    return null; 
  }

  //Variable created to include special characters.
  var hasSpecialCharacters = confirm(
    "Click 'OK' to include special characters."
  );

  //Variable created to include numeric characters.
  var hasNumericCharacters = confirm(
    "Click 'OK' to include numeric characters."
  );

  //Variable created to include lowercase characters.
  var hasLowerCaseCharacters = confirm(
    "Click 'OK' to include lowercase characters."
  );

  //Variable created to include uppercase characters.
  var hasUpperCaseCharacters = confirm(
    "Click 'OK' to include uppercase characters."
  );

  //To stop advancement if no character type selected.
  if (
    hasSpecialCharacters === false &&
    hasNumericCharacters === false &&
    hasLowerCaseCharacters === false &&
    hasUpperCaseCharacters === false
  ) {
    alert("Please select at least one character type.");
    return null;
  }

  var passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCaseCharacters: hasLowerCaseCharacters,
    hasUpperCaseCharacters: hasUpperCaseCharacters,
  };

  return passwordOptions;
}

function getRandom(arr) {
  var ranIndex = Math.floor(Math.random() * arr.length);
  var ranElement = arr[ranIndex];

  return ranElement;
}

function generatePassword() {
  var options = getPasswordOptions();
  var result = [];

  //Contain array of all possible character selections.
  var possibleCharacters = [];
  //Contain an array of character types based on user's selection.
  var guaranteedCharacters = [];

  if (!options) return null;

  if (options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(symbol);
    guaranteedCharacters.push(getRandom(symbol));
  }

  if (options.hasNumericCharacters) {
    possibleCharacters = possibleCharacters.concat(number);
    guaranteedCharacters.push(getRandom(number));
  }

  if (options.hasLowerCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
    guaranteedCharacters.push(getRandom(lowerCase));
  }

  if (options.hasUpperCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCase);
    guaranteedCharacters.push(getRandom(upperCase));
  }

  for (i = 0; i < options.length; i++) {
    var characterOptions = getRandom(possibleCharacters);

    result.push(characterOptions);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join("");

}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }
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
    