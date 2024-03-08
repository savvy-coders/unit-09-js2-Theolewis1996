function greet(name) {
    console.log("Hello " + name);
}

greet("TJ");

function calculateSum(a, b) {
    return a+b;
}

let sum = calculateSum(1, 2); 
    console.log(sum);

    function outerFunction() {
        let x = 10;
        
        function innerFunction() {
            console.log(x);
        }
        innerFunction();
    }
    outerFunction();

    function outerFunctionTwo() {
        let x = 10;
        
        function innerFunctionTwo() {
            console.log(x);
        }
        return innerFunctionTwo;
    }
    let closure = outerFunctionTwo();
    closure();
        console.log(closure);

function handleClick(event) {
    console.log("Button clicked");
    console.log("Event type: ", event.type);
    console.log("Target element: ", event.target);
}
const button = document.querySelector('#myButton');
button.addEventListener("click", handleClick);

function handleClickStopPropagation(event) {
    event.stopPropagation();
    console.log("Button clicked");
    console.log("Event type: ", event.type);
    console.log("Target element: ", event.target);
}
const propagating = document.querySelector('#myButton');
propagating.addEventListener("click", handleClickStopPropagation);

function createNewElement() {
    const newElement = document.createElement('div');
    newElement.className = 'myClass';
    newElement.innerHTML = 'New element';
    console.log(newElement.innerHTML);
}

const parentElement = document.getElementById('parentElementId');
parentElement.appendChild(newElement);
newElement.addEventListener("mouseover", "Mouse over new element!");

// JavaScript Coding Challenge

// 1. Create a function named 'greet' that takes one parameter 'name'. 
// The function should log a greeting message with the provided name. 
// Call the function with your name as an argument.


// 2. Create a function named 'calculateSum' that takes two parameters 'a' and 'b'. 
// The function should return the sum of 'a' and 'b'. 
// Call the function with two numbers of your choice and log the result.


// 3. Create a function named 'outerFunction' that declares a variable 'x' with a value of 10. 
// Inside 'outerFunction', define another function named 'innerFunction' that logs the value of 'x'. 
// Call 'innerFunction' inside 'outerFunction', and then call 'outerFunction'.


// 4. Copy 'outerFunction' and alter it to be called 'outerFunctionTwo'. 
// Then modify the code so that 'innerFunctionTwo' is returned instead of being called. 
// Assign the returned 'innerFunctionTwo' to a variable named 'closure' and call 'closure'. Log the result.


// 5. Create a function named 'handleClick' that takes one parameter 'event'. 
// The function should log the message 'Button clicked!', the event type, and the target element. 
// Then, write code to select an HTML button element with the ID 'myButton' 
// and attach the 'handleClick' function as a click event listener.


// 6. Copy 'handleClick' and alter it to be called 'handleClickStopPropagation'. 
// Then modify the code so that it prevents the click event from propagating to parent elements. 
// Attach 'handleClickStopPropagation' as a click event listener.


// 7. Create a function named 'createNewElement' that creates a new 'div' element, 
// sets its 'className' to 'myClass', sets its 'innerHTML' to 'New element', 
// and appends it to an existing element with the ID 'parentElementId'. 
// After appending the new element, attach a 'mouseover' event listener to it that logs the message 'Mouse over new element!'.


// Note: For tasks 5, 6, and 7, you can use the existing HTML elements with the IDs 'myButton' and 'parentElementId' in the HTML document.

// Remember to use the 'function' keyword to define your functions, and use 'console.log' to log the results. Good luck!
