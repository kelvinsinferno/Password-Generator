//Passwords you'll never remember

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

generateBtn.addEventListener('click', writePassword);

function writePassword() {

  let password = "";

  let pwlength = window.prompt('Enter Password lenght between 8 and 128 characters');
  if (pwlength <= 8 || pwlength >= 128) {
    alert("Wrong! Enter a valid length.");
    writePassword();
    return;
  }
  let lowerCase = window.confirm("Should password include lower case letters?");
  let upperCaseLetters = window.confirm("Should password include upper case letters?");
  let specialCharacters = window.confirm("Should password include special characters?");
  let numbers = window.confirm("Should password include numbers?");

  for (let i = 0; i < pwlength; i++) {

    if (lowerCase == true && password.length < pwlength) {
      password = password + getRandomLower();
    }

    if (upperCaseLetters == true && password.length < pwlength) {
      password = password + getRandomUpper();
    }

    if (specialCharacters == true && password.length < pwlength) {
      password = password + getRandomsymbol();
    }

    if (numbers == true && password.length < pwlength) {
      password = password + getRandomNumber();
    }
  }

  let passwordArray = password.split('')
  passwordArray = passwordArray.sort(function () {
    return Math.random() - 0.5;
  });

  password = passwordArray.join("");

  passwordText.value = password;

  return "Generated Password";
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomsymbol() {
  const symbols = '~!@#$%^&*()-_+={}[]|\<>?,./';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomLower(), getRandomUpper(), getRandomNumber(), getRandomsymbol());
