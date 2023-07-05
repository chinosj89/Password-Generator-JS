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
    if (isNaN(passwordLength)) {
    return alert("Please type a number, next time") // added function if user types the number i.e "eight, ten, hundred, 1 hundred"
    }
  // uppercase
  var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var includeUpperCase = confirm('Do you want uppercase letters?');

  // lowercase
  var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var includeLowerCase = confirm('Do you want lowercase letters?');

  // numbers
  var nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']; // nums will be strings as well not as a number because i learned you will have to convert them to strings
  var includeNums = confirm('Do you want numbers?');

  // special keys
  var special = ['!', '@', '#', '$', '%', '^', '&', '*'];
  var includeSpecial = confirm('Do you want special keys?');
  

  // once the arrays have been completed; i learned to add the confirm which is a boolean. then i then created the if statements such as if the user wants uppercase letter and confirmed then it will be added to the var = passwordGenerated from the arrays of upperCase using += <-- this was for previously learned code; keeping comments and code for future reference
  var passwordGenerated = [];
  //if (includeUpperCase) {passwordGenerated += upperCase} 
  //if (includeLowerCase) {passwordGenerated += lowerCase}
  //if (includeNums) {passwordGenerated += nums}
  //if (includeSpecial) {passwordGenerated +=special}
    // removed this because instructor said to put vars into objects not a whole string. with that being said i have changed the array and now the code for them changes as well as seen below: 

  if (includeUpperCase) {passwordGenerated = passwordGenerated.concat(upperCase);}
  if (includeLowerCase) {passwordGenerated = passwordGenerated.concat(lowerCase);}
  if (includeNums) {passwordGenerated = passwordGenerated.concat(nums);} 
  if (includeSpecial) {passwordGenerated = passwordGenerated.concat(special);}
  // added else statement if all come up as false
    else { 
      return alert("Please refresh and Click Generate Password. I can not generate your password if you don't want any keys. That's not a password, you know")
    } 
  // to create the password now, i created the var password empty since the passwordText.value = password is asking to be defined. then using the for equation to randomize.
  var password = "";
    for (let i = 0; i < passwordLength; i++) {
  password += passwordGenerated[Math.floor(Math.random()* passwordGenerated.length)]
      
}

// Learned that this will go inside the id = Password and passwordText.value is in the text area
var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
