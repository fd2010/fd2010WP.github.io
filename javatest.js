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