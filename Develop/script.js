// Assignment code here
  window.alert(`Let's Create a Password for you!\nClick Generate Password`);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button; moved this to the top so i can see the writePassword() together and to lessen confusion for me.
generateBtn.addEventListener("click", writePassword);

//JS Logic = semantically it would be best to create the arrays together and include the confirms altogether. But to make it make sense for me, i wanted to make sure that I went one criteria at a time. so i started with uppercase and so on. 
function writePassword() {
  
  var passwordLength = Number(prompt("Length of Password must be between 8 to 128"));
    while (passwordLength < 8 || passwordLength > 128){
      passwordLength = Number(prompt("Length must be 8-128 characters."));
    };
  // uppercase
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXZ";
  var includeUpperCase = confirm("Do you want UpperCase Letters?");
    
  // lowercase
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var includeLowerCase = confirm("Do you want lowercase letters?");

  // numbers
  var nums = "0123456789";
  var includeNums = confirm("Do you want numbers?");

  // special keys
  var special = "!@#$%^&*()";
  var includeSpecial = confirm("Do you want special keys?");
  

  // once the arrays have been completed; i learned to add the confirm which is a boolean. then i then created the if statements such as if the user wants uppercase letter and confirmed then it will be added to the var = passwordGenerated from the arrays of upperCase using +=
  var passwordGenerated = "";
  if (includeUpperCase) {passwordGenerated += upperCase} 
  if (includeLowerCase) {passwordGenerated += lowerCase}
  if (includeNums) {passwordGenerated += nums}
  if (includeSpecial) {passwordGenerated +=special}

  // to create the password now, i created the var password empty since the passwordText.value = password is asking to be defined. then using the for equation to randomize.
  var password = "";
    for (let i = 0; i < passwordLength; i++) {
  password += passwordGenerated[Math.floor(Math.random()* passwordGenerated.length)]
      
}

// Learned that this will go inside the id = Password and passwordText.value is in the text area
var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
