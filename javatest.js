function logOn() {
  // Ask for name program
  var userName = prompt("What is your username?");

  // Check if the user provided a name
  if (userName !== null && userName !== "") {
      var userName = prompt("Hello, " + userName + "!  please enter password next");
      alert("Sign in successfull");
  } else {
      alert("*Log in unsuccesfull*");
  }
}

document.getElementById("logOnButton").addEventListener("click", logOn);