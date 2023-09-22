//Ask for name program
var userName = prompt("What is your name?");

// Check if the user provided a name
if (userName !== null && userName !== "") {
  // Display a greeting with the user's name
  alert("Hello, " + userName + "! Welcome to our website.");
} else {
  // If the user didn't provide a name, display a generic greeting
  alert("Hello, there! Welcome to our website.");
}