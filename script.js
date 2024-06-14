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


const introText1 = "Hi there, I'm";
const introText2 = "Patience Olebogeng Rasebitse";
const introText3 = "and I'm an aspiring Software Developer";

let index1 = 0;
let index2 = 0;
let index3 = 0;

function typeIntro1() {
    if (index1 < introText1.length) {
        document.getElementById('intro1').innerHTML += introText1.charAt(index1);
        index1++;
        setTimeout(typeIntro1, 100);
    } else {
        setTimeout(typeIntro2, 500); // Wait before starting the next part
    }
}

function typeIntro2() {
    if (index2 < introText2.length) {
        document.getElementById('intro2').innerHTML += introText2.charAt(index2);
        index2++;
        setTimeout(typeIntro2, 100);
    } else {
        setTimeout(typeIntro3, 500); // Wait before starting the next part
    }
}

function typeIntro3() {
    if (index3 < introText3.length) {
        document.getElementById('intro3').innerHTML += introText3.charAt(index3);
        index3++;
        setTimeout(typeIntro3, 100);
    }
}

document.addEventListener('DOMContentLoaded', typeIntro1);
