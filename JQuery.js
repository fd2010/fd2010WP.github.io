
function appendText() {
    var txt1 = `<div style="border-style:dotted">Test</div>`;
    $("body").append(txt1);
}

function modify() {
    $("div").width("100pt");
}


function makeBiggerTextSize() {
    $("p").each(function() {
        var currentSize = parseFloat($(this).css("font-size"));
        $(this).css("font-size", (currentSize + 1) + "px");
    });
}

function makeSmallerTextSize() {
    $("p").each(function() {
        var currentSize = parseFloat($(this).css("font-size"));
        $(this).css("font-size", (currentSize - 1) + "px");
    });
}




function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to start the animation
function startAnimation() {
    var box = $("#box");
    var animationSpeed = 500; // Animation speed in milliseconds
    var bounceDistance = 50; // Bounce distance in pixels

    animationInterval = setInterval(function() {
        // Bounce the box up and down
            box.animate({ left: "+=" + bounceDistance }, animationSpeed, function() {
            // Animation complete, reverse direction
            box.animate({ left: "-=" + bounceDistance }, animationSpeed);
        });
    }, animationSpeed * 2); // Twice the animation speed to prevent overlap
}

// Function to stop the animation
function stopAnimation() {
    clearInterval(animationInterval); // Clear the animation interval
}

$(document).ready(function() {

    $("#appendTextButton").click(appendText);

    $("#modifyButton").click(modify);

    $("#changeText").click(function() {
        $("#demo").text("Text has been changed with jQuery!");
    });

    $("#changeTextBack").click(function() {
        $("#demo").text("Example of DOM");
    });

    $("#changeSizeUp").click(function() {
        makeBiggerTextSize();
    });

    $("#changeSizeDown").click(function() {
        makeSmallerTextSize();
    });


    $("#hide").click(function(){
        $("p").hide();
      });
    $("#show").click(function(){
        $("p").show();
    });


    $("*").click(function() {
        var randomColor = getRandomColor();
        $("#colorBox").css("background-color", randomColor);
    });

    $("#addTaskButton").click(function() {
        var taskText = $("#taskInput").val(); // Get the task text from the input field

        if (taskText === ""){
            alert("Please input a value into the field.");
        }else{
            $("#taskList").append("<li>" + taskText + "</li>"); 
            $("#taskInput").val("");
        } 
    });

    var animationInterval; // Variable to hold the animation interval

    // When the "Start Animation" button is clicked
    $("#startAnimationButton").click(function() {
        // Start the animation
        startAnimation();
    });

    // When the "Stop Animation" button is clicked
    $("#stopAnimationButton").click(function() {
        // Stop the animation
        stopAnimation();
    });


    

});


