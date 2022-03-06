// Assignment Code
var generateBtn = document.querySelector("#generate");

//constant array variables which will be use randomly with given options by user.
const charUpper = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const charLower = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const numbers = ['0','1','2','3','4','5','6','7','8','9']
const charSpecial = ['!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','^',']','_','{','|','}','~']

// Variables for user options of password
var passLength;
var lowercaseRequired;
var uppercaseRequired;
var numericRequired;
var specialCharactersRequired;

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); //generatepassword function is called and the value return from that function is thn stored in password variable.
  var passwordText = document.querySelector("#password");

  passwordText.value =  password;
}

function generatePassword()
{
  //This array variable will merge/concatinate all orther array with user selected inputs.
  var selectedOptions=[];
  //This variable will concatinate single random characters and returned to writePassword function
  var pass="";
  
  
  //This do while loop will run until the given requirement of password length minimum 8 or maximum 128 is not met.
  //This will also check if the given input is number or not.
  do{
    passLength = prompt("Please provide character length for the password.\n\nMinimum 8 to 128 maximum.");
  }while(passLength<8 || passLength>128 || isNaN(parseInt(passLength)));


  //Asking user what should random passowrd should generate from. This will be asked until a single option is selected.
  do
  {
    alert("Random password can be generated with following\n\nLowercase Characters\nUppercase Characters\nNumber\nSpecial Characters.\nIn order to gernerate random password please select given option(s).");
    lowercaseRequired= confirm("Do you require Lowercase characters in password?");
    uppercaseRequired= confirm("Do you require Uppercase characters in password?");
    numericRequired= confirm("Do you require numbers in password?")
    specialCharactersRequired= confirm("Do you require Special characters in password?")
  } while(!lowercaseRequired && !uppercaseRequired && !numericRequired && !specialCharactersRequired)

  //Concatinating all lowercase characters in array variable selectedOptions if user selected it in random password
  if (lowercaseRequired)
  {
    selectedOptions = selectedOptions.concat(charLower);
  }

  //Concatinating all uppercase characters in array variable selectedOptions if user selected it in random password
  if (uppercaseRequired)
  {
    selectedOptions = selectedOptions.concat(charUpper);
  }

  //Concatinating all number in array variable selectedOptions if user selected it in random password
  if (numericRequired)
  {
    selectedOptions = selectedOptions.concat(numbers);
  }

  //Concatinating all special characters in array variable selectedOptions if user selected it in random password
  if (specialCharactersRequired)
  {
    selectedOptions = selectedOptions.concat(charSpecial);
  }


  //For loop up until the length of password as required by USER.
  //Generating a random number which then used as index of the array which contains all the required options selected by user.
  //The character at that index, then concatinated with a variable pass.
  for (var i=0; i<passLength; i++)
  {
    pass = pass + (selectedOptions[(Math.floor(Math.random()*selectedOptions.length))]);
  }

  //Returning the random pass.
  return pass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //writePassword function is called on click of generateBtn
