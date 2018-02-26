//Let's kick this off with a prompt, the .toLowerCase forces the answer to all lower case.
var name = prompt("What's your name?").toLowerCase();
//these are global variables, in the future you'll learn to avoid making 
//global variables, but if you do, it's best to declare them all at the 
//top of the code
var secretCode;
var confirmed = false;
let confirmedCode = false;

//while looop to check that the user put the right name in
while (!confirmed) {
  if (confirm("Your name is " + name)) {
    alert("Welcome " + name);
    confirmed = true;
  }
  else {
    name = prompt("What's your name?").toLowerCase();
  }
}

//conditional to check if the name is one of the secret agents, 
//if not then user is alerted that they're not welcome
if (name === "seth" || name === "john" || name === "brian" || name ==="joe") {
  //prompt for secret code and force it to lower case
  var secretCode = prompt("What's the secret code?").toLowerCase();
  //while loop to check that the user entered what they meant to, and if it
  //is correct, they are welcomed as a secret agent, else they are called
  //a spy
  while (!confirmedCode) {
    if ( confirm("Is this what you meant to enter " + secretCode + "?") ) {
      if (secretCode === "pink penguins") {
      alert("Welcome secret agent");
      confirmedCode = true;
      }
      else {
        alert( "Spy!" )
      }
    }
    else {
      prompt("What's the secret code?").toLowerCase();
    }
  }
}
else {
  alert("Sorry " + name + " we don't accept your kind around here")
}

