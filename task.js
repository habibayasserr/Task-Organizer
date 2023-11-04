// This is a simple JavaScript function.
function greet() {
    alert("Hello world!");
}

// This is a more complex JavaScript function.
function calculateArea(width, height) {
    return width * height;
}

// This code will call the greet() function when the user clicks on a button.
document.getElementById("myButton").addEventListener("click", greet);

// This code will calculate the area of a rectangle and display the result in an alert box.
var area = calculateArea(10, 5);
alert("The area of the rectangle is " + area);