// Constructor function and prototype
function Car(make, model) {
    this.make = make;
    this.model = model;
  }
  
  Car.prototype.displayInfo = function() {
    console.log(`Car: ${this.make} ${this.model}`);
  };
  
  const myCar = new Car('Toyota', 'Camry');
  myCar.displayInfo();


  // Async/await with Fetch API
async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchData();

  // Using Fetch API for AJAX
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error fetching data:', error));

// Arrow functions and template literals
const add = (a, b) => a + b;
console.log(`Sum: ${add(2, 3)}`);

// Closure example
function outerFunction() {
    const outerVariable = 'I am from outer function';
    
    function innerFunction() {
      console.log(outerVariable);
    }
  
    return innerFunction;
  }
  
  const closureExample = outerFunction();
  closureExample();


  // ES6 Modules
// math.js
export const add = (a, b) => a + b;

// app.js
import { add } from './math.js';
console.log(add(2, 3));


// DOM manipulation
const button = document.getElementById('myButton');

button.addEventListener('click', () => {
  const paragraph = document.createElement('p');
  paragraph.textContent = 'Button clicked!';
  document.body.appendChild(paragraph);
});


// Error handling with try, catch, and finally
try {
    // Some code that may throw an error
    throw new Error('This is an error');
  } catch (error) {
    console.error('Caught an error:', error.message);
  } finally {
    console.log('This will always execute');
  }


 // Regular expression example
const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const email = 'example@email.com';

if (emailPattern.test(email)) {
  console.log('Valid email address');
} else {
  console.log('Invalid email address');
}


// Testing with Jest
// math.js
export const add = (a, b) => a + b;

// math.test.js
import { add } from './math';

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});


// Local Storage example
localStorage.setItem('username', 'john_doe');
const storedUsername = localStorage.getItem('username');
console.log(`Stored username: ${storedUsername}`);

// Sanitize user input to prevent XSS attacks
function sanitizeInput(input) {
    return input.replace(/<script.*?>.*?<\/script>/g, '');
  }
  
  const userInput = '<script>alert("Hello");</script>';
  const sanitizedInput = sanitizeInput(userInput);
  console.log('Sanitized input:', sanitizedInput);
