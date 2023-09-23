function logOn() {
  // Ask for name program
  var userName = prompt("What is your username?");

  // Check if the user provided a name
  if (userName !== null && userName !== "") {
      // Display a greeting with the user's name
      var userName = prompt("Hello, " + userName + "!  please enter password next");
      alert("Sign in successfull");
  } else {
      // If the user didn't provide a name, display a generic greeting
      alert("*Log in unsuccesfull*");
  }
}

document.getElementById("logOnButton").addEventListener("click", logOn);