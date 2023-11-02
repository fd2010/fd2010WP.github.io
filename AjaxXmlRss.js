$(document).ready(function() {
    // Attach a click event handler to the button
    $('#fetchButton').click(function() {
        getContents();
    });
});

function getContents() {
    $.ajax({
        url: 'https://f28wp.github.io/material/tasks/Task%2008%20-%20AJAX%20&%20JSON.html',
        success: function(data) {
            console.log(data);
            $('#data').html(data);
        }
    });
}


// Move the white box to a random position
function moveBoxRandomly() {
    var whiteBox = document.getElementById('whiteBox');
    var maxX = window.innerWidth - whiteBox.clientWidth;
    var maxY = window.innerHeight - whiteBox.clientHeight;
  
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);
  
    whiteBox.style.left = randomX + 'px';
    whiteBox.style.top = randomY + 'px';
  }
  
  // Attach the function to a button click event
  var moveButton = document.getElementById('moveButton');
  moveButton.addEventListener('click', moveBoxRandomly);
  