function appendText() {
    var txt1 = `<div style="border-style:dotted">Test</div>`; // Create text with HTML
    $("body").append(txt1);   // Append new elements
}

document.getElementById("appendTextButton").addEventListener("click", appendText);

function modify() {
    $("div").width("100pt");
  }

  document.getElementById("modifyButton").addEventListener("click", modify);