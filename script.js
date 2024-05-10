// Wait for the HTML document to finish loading
document.addEventListener("DOMContentLoaded", function() {
    // Find the toggle button element by its ID
    var toggleButton = document.getElementById("navbar-toggle");
    // Find the navbar collapse element by its ID
    var navbarCollapse = document.getElementById("navbar-collapse");

    // Add a click event listener to the toggle button
    toggleButton.addEventListener("click", function() {
        // Toggle the "collapsed" class on the navbar collapse element
        navbarCollapse.classList.toggle("collapsed");
        // Toggle the "collapsed" class on the toggle button itself
        toggleButton.classList.toggle("collapsed");
    });
});
