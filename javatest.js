function logOn() {
  // Ask for name program
  var userName = prompt("What is your username?");

  // Check if the user provided a name
  if (userName !== null && userName !== "") {
      var password = prompt("Hello, " + userName + "!  please enter password next");
      alert("Sign in successfull");
      document.getElementById("logOnButton").style.display = "none";

      //update logout text
      var outputParagraph = document.getElementById("displayUser");
      outputParagraph.textContent = "Logged in as: " + userName;

  } else {
      alert("*Log in unsuccesfull*");
  }
}

document.getElementById("logOnButton").addEventListener("click", logOn);

function rollDice(){

  var howMany = prompt("How many times do you want to roll?");

  while (howMany <= 0){
    howMany = prompt("Sorry this number was invalid \nHow many times do you want to roll?");
  }

  let rolls = [];

  for (let i = 0; i < howMany; i++) {
    rolls.push(Math.floor(Math.random() * 6) + 1);
  }

  for (let i = 0; i < howMany; i++) {
    alert("Roll " + (i+1) + " was:\n" + rolls[i]);
  }
}

document.getElementById("rollDiceButton").addEventListener("click", rollDice)

function typeChecker() {
  //let input = prompt("put in a word or number to see the type of it");
  var inputData = document.getElementById("inputData").value;
  var dataType = typeof inputData;
  alert(typeof dataType);
}

//document.getElementById("typeCheckerButton").addEventListener("click", typeChecker)