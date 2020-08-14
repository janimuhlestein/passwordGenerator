// Assignment Code

//create an object to hold our settings
var settings = {
  numChars: "NaN",
  lowerCase: "undefined",
  upperCase: "undefined",
  specChars: "undefined",
  numeric: "undefined",
  //if they don't select an option, reset function needed
  reset: function() {
      window.alert("Resetting options.");
      this.numChars = "NaN";
      this.lowerCase = "undefined";
      this.upperCase = "undefined";
      this.specChars = "undefined";
      this.numeric = "undefined";
  }
  }
//get the settings
var getSettings = function() {
//get the correct number of characters, and don't let them enter a non integer
while(isNaN(settings.numChars)===true){
    settings.numChars = window.prompt("Please enter the number of characters in an integer between 8 and 128.");
    //take string from prompt and change (or try to) an integer
    parseInt(settings.numChars);
    while(settings.numChars < 8 || settings.numChars > 128){
        settings.numChars = window.prompt("You must enter a number between 8 and 128. Please try again.");
    }
    //Get the options for types
}
while(settings.lowerCase === "undefined") {
    settings.lowerCase = window.confirm("Do you want to use lower case characters?");
}
while(settings.upperCase === "undefined") {
    settings.upperCase = window.confirm("Do you want to use upper case characters?");
}
while(settings.specChars === "undefined"){
    settings.specChars = window.confirm("Do you want to use special characters?");
}
while(settings.numeric === "undefined") {
    settings.numeric = window.confirm("Do you want to use numerals?")
}   
console.log(settings);
//If they haven't chosen any options, make them go back and do it again
while(settings.lowerCase === false && settings.upperCase === false && settings.specChars === false && settings.numeric === false) {
    window.confirm("Please enter the settings you want for your password. Note, you will have to select at least one option.");
    settings.reset();
    settings = getSettings();
   }
   console.log("All settings have been selected this time!");

return settings;
}

//now that we've got the settings, let's generate a password based on them!
var writePassword = function() {
    var setObj = getSettings();
    //set up the strings containing our possible characters
    var alpha = "abcdefghijklmnopqrstuvwxyz";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var numeric = "1234567890";
    var special = "#@!$%^&*";
    var password = "";
    var randomChar = "";
    //option settings -- add options to the array depending on the user choices
    var options = [];
    switch(setObj.upperCase) {
      case true:
      options.push(upper);
      break;
      default:
        break;
    }
    switch(setObj.lowerCase) {
      case true:
        options.push(alpha);
        break;
        default:
          break;
    }

    switch(setObj.numeric) {
      case true:
        options.push(numeric);
        break;
        default:
          break;
    }

    switch(setObj.specChars) {
      case true:
        options.push(special);
        break;
        default:
          break;
    }
    console.log(options);
    //length of password
    var length = setObj.numChars;
    // for as many times as we need characters added, get a random option, then
    //get a random character from that option
    //add it to the password
    for(i=0; i< length; i++){
        var selectedOption = options[Math.floor(Math.random() * options.length)];
        randomChar = selectedOption.charAt(Math.floor(Math.random() * selectedOption.length));
        password += randomChar;
    }
    console.log(password);
    //output their new password to the text area
    document.getElementById("password").value = "Your new password is: " + password; 

}

var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

