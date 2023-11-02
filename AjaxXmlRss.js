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
