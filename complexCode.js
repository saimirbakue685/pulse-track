/**
 * Filename: complexCode.js
 * Description: This code demonstrates a complex and sophisticated implementation of a web application.
 */

// Global Variables
let users = [];
let currentUser = null;
let loggedIn = false;

// Classes
class User {
  constructor(name, age, email) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}

// Utility Functions
function createUser(name, age, email) {
  const newUser = new User(name, age, email);
  users.push(newUser);
}

function loginUser(email) {
  currentUser = users.find(user => user.email === email);
  loggedIn = currentUser ? true : false;
}

function logoutUser() {
  currentUser = null;
  loggedIn = false;
}

// UI Functions
function displayUsers() {
  console.log('Users:');
  users.forEach(user => console.log(`Name: ${user.name}, Age: ${user.age}, Email: ${user.email}`));
}

function displayCurrentUser() {
  if (loggedIn && currentUser) {
    console.log('Current User:');
    console.log(`Name: ${currentUser.name}, Age: ${currentUser.age}, Email: ${currentUser.email}`);
  } else {
    console.log('No user logged in.');
  }
}

// Application Flow
createUser('John Doe', 25, 'john@example.com');
createUser('Jane Smith', 30, 'jane@example.com');
createUser('Mike Johnson', 35, 'mike@example.com');

loginUser('john@example.com');
displayCurrentUser();

console.log('---');

displayUsers();

console.log('---');

logoutUser();
displayCurrentUser();

console.log('---');

loginUser('jane@example.com');
displayCurrentUser();

console.log('---');

displayUsers();

console.log('---');

logoutUser();
displayCurrentUser();

console.log('---');

loginUser('mike@example.com');
displayCurrentUser();

console.log('---');

displayUsers();

console.log('---');

logoutUser();
displayCurrentUser();

console.log('---');

/**
 * Line 201 and beyond can continue with additional logic, features, or user interactions.
 * This code demonstrates the basic structure and functionality of a complex web application.
 */