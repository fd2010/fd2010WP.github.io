// User data in JSON format
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
  },
  {
    "username": "ji007",
    "password": "bigPeper0ni",
    "firstName": "James",
    "lastName": "Irving"
  },
  {
    "username": "john",
    "password": "iminurwalls",
    "firstName": "Steven",
    "lastName": "Grifin"
  },
  {
    "username": "bigAboi",
    "password": "fraserLetsGoJim",
    "firstName": "Aryan",
    "lastName": "Jangir"
  },
  {
    "username": "Zibobe",
    "password": "123herewego",
    "firstName": "Zia",
    "lastName": "Rahman"
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
      $("#logOnButton").css("display", none);
    } else {
      alert("Login unsuccessful. Please check your username and password.");
    }
  } else {
    alert("Login unsuccessful. Please enter a valid username.");
  }
}

document.getElementById("logOnButton").addEventListener("click", logOn);

function rollDice(){

  var howMany = prompt("How many pears do you want to roll?");

  while (howMany <= 0){
    howMany = prompt("Sorry this number was invalid \nHow many pears do you want to roll?");
  }

  let rolls = [];

  for (let i = 0; i < howMany; i++) {
    rolls.push(Math.floor(Math.random() * 6) + 1);
  }

  for (let i = 0; i < howMany; i++) {
    alert("Pear " + (i+1) + " was:\n" + rolls[i]);
  }
}

document.getElementById("rollDiceButton").addEventListener("click", rollDice)

function toggleImageText(container) {
  var text = $(container).find("p");
  var image = $(container).find("img");

  // Check if the text is hidden or visible
  if (text.css("display") === "none") {
      // Fade out the image and then fade in the text
      $(image).fadeOut("slow", function () {
          $(text).fadeIn("slow");
      });
  } else {
      // Fade out the text and then fade in the image
      $(text).fadeOut("slow", function () {
          $(image).fadeIn("slow");
      });
  }
}


