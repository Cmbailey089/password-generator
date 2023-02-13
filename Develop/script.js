// Assignment code here

var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '123456789';
var symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_\`{|}~';

var min= 8;

var max = 128;

function generatePassword() {
  var lowerOk = confirm("Lowercase letters?");
  if (lowerOk) {
    chars = lowerCase;
  } else {
  }
  
  var upperOK = confirm("Uppercase letters?");
  if (upperOK) {
    chars += upperCase;
  } else {

  }

  var numbersOK = confirm("Include numbers?");
  if (numbersOK) {
    chars += numbers;
  } else {

  }

  var symbolOK = confirm("Special characters?");
  if (symbolOK) {
    chars += symbols;
  } 

  var i = prompt("password length?");
    if (i > 7 && i < 129) {
      while (i > 0) {
        password += chars[Math.floor(Math.random() * chars.length)];
        i--;
      }
       return password;
    }  else {
      
      password= "please try again";
      return password;
        }
   
    
      }



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);