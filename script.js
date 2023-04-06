/*Have to make some arrays in order for the button to know what how long or short the password length is 
as well as the possible choices in letters, digits and special characters. */

var passwordlength = (i=0)[i>8 & i < 128];
var characterlength= 8;
var choice= [];

var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t', 'u','v','w','x','y','z'];
var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W', 'X','Y','Z'];
var number = ['0','1','2','3','4', '5','6','7','8','9','0'];
var special =['!','@','#','$','%','&','*','(',')','-','_','+','=','{','}','[',']','\','|',',';','"','<','>','?',',','.','/','`','~'];


// Assignment Code
var generateBtn = document.querySelector("#generate"); // in here is where the HTML button coding is linked to

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); //when this function takes places it jumps down to the next line of coding.

// Write password to the #password input
function writePassword(){ 

  //this is added to show True of False statements. Thus letting you build and generate your final fingerPrint
var passwordText = document.querySelector("#password");

//if (usuablePrompts){ // if statement is true then fingerPrint will be generated. This is tested on lines 34-43
var fingerPrint = getPassword(); 

passwordText.value = fingerPrint;}
//this statement is now pulling data from the var arrays listed in the top of the js page
// the i++ means you can keep trying different possiblities
//this is where the value of the password is being stored

var getPassword = function(){
  choice =[];

  // this statement is clean up the coding. ParseInt means to put together a variety of options in the consol.log().  || means or. 
passwordlength = parseInt(prompt("How many characters do you desire to have in your password?(8-128)"));
if (passwordlength <8 || passwordlength > 128){ 
alert("not correct amount of characters and characters have to be a number between 8-128 digits. Please try again Thank you.");
return false;
}

const response =confirm("Would you like lowercase letters in your password?");
if (response){
choice = choice.concat(lowercase);
}
const response2 =confirm("Would you like uppercase letters in your password?");
if (response2){
  choice = choice.concat(uppercase);
}
const response3 =confirm("Would you like numbers in your password?");
if (response3){
  choice = choice.concat(number);
}
const response4 =confirm("Would you like special characters in your password?");
if (response4){
  choice = choice.concat(special); 
 
}
var password = "";
for(var i=0; i< passwordlength; i++){
  var randomIndex= Math.floor(Math.random()* choice.length); // in class we learend about Math.floor randomizer
  console.log(choice[randomIndex]);
  console.log(password);
  password = password + choice [randomIndex]; // this line conccatinate the randomizer and the possible options to create the fingerPrint
  }
  return password;{
  }
  }
  //final password should not be an array it should be a string there should be no commas.
