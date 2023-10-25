// User data in JSON format - updated
var users = [
  {
    "username": "bigboi",
    "password": "password123",
    "firstName": "Big",
    "lastName": "Man"
  },
  {
    "username": "BoraBora",
    "password": "letmein",
    "firstName": "Ali",
    "lastName": "Bara"
  }
];

function logOn() {
  var username = prompt("What is your username?");

  if (username !== null && username !== "") {
    var password = prompt("Hello, " + username + "! Please enter your password:");

    // Find the user by username
    var user = users.find(function (u) {
      return u.username === username && u.password === password;
    });

    if (user) {
      alert("Sign in successful");
      document.getElementById("logOnButton").style.display = "none";

      // Update the display with user information
      var outputParagraph = document.getElementById("displayUser");
      outputParagraph.textContent = "Logged in as: " + user.firstName + " " + user.lastName;
    } else {
      alert("Login unsuccessful. Please check your username and password.");
    }
  } else {
    alert("Login unsuccessful. Please enter a valid username.");
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