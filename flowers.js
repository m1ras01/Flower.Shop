// Function to add a new task to a task list
function addTask(listId) {
  // Get the task input and task list elements
  const taskInput = document.getElementById('taskInput' + listId.slice(-1));
  const taskList = document.getElementById(listId);

  // Check if the input is not empty
  if (taskInput.value.trim() !== '') {
    // Create a new task element
    const newTask = document.createElement('li');
    newTask.textContent = taskInput.value;

    // Toggle the completed class on click
    newTask.onclick = function () {
      this.classList.toggle('completed');
    };

    // Append the new task to the task list and clear the input field
    taskList.appendChild(newTask);
    taskInput.value = '';
  }
}

// Function to show a specific tab by hiding others
function showTab(tabId) {
  // Hide all tabs
  var tabs = document.getElementsByClassName('tab-content');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active-tab');
  }

  // Show the selected tab
  document.getElementById(tabId).classList.add('active-tab');
}

// Function to display feedback messages
function showFeedback(message, className) {
  // Create a feedback element
  var feedbackElement = document.createElement('div');
  feedbackElement.textContent = message;
  feedbackElement.className = className;

  // Append the feedback element to the container
  var feedbackContainer = document.getElementById('feedback-container');
  feedbackContainer.innerHTML = ''; // Clear existing messages
  feedbackContainer.appendChild(feedbackElement);

  // Clear the feedback after a few seconds
  setTimeout(function () {
    feedbackContainer.innerHTML = '';
  }, 3000);
}

// Functions to show specific types of feedback
function showSuccess() {
  showFeedback('Operation successful!', 'success');
}

function showError() {
  showFeedback('Error occurred. Please try again.', 'error');
}

function showInfo() {
  showFeedback('This is an informational message.', 'info');
}

// Function to submit a form and display success or error messages
function submitForm() {
  // Get the selected color and flower name
  var selectedColor = document.getElementById('myColor').value;
  var flowerName = document.getElementById('flowerName').value;

  // Check if both color and flower name are selected
  if (selectedColor && flowerName) {
    // Display success message
    alert('Form submitted successfully!\nSelected Color: ' + selectedColor + '\nFlower Name: ' + flowerName);
  } else {
    // Display error message
    alert('Please choose a color and enter the flower name.');
  }
}

function login(){
// Variables and functions for handling login attempts
let loginAttempts = 0;
const maxAttempts = 3;
const blockDuration = 5000; // 5 seconds in milliseconds
let blockEndTime = 0;

// Function to authenticate a user
function authenticate() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  if (email === 'Admin' && password === 'Admin') {
    window.location.href = 'withDiscount.html';
    return;
  }
  // Check if the user is currently blocked
  else if(Date.now() < blockEndTime) {
    const timeLeft = Math.ceil((blockEndTime - Date.now()) / 1000);
    showError();
    displayErrorMessage(`Too many login attempts. Try again in ${timeLeft} seconds.`);
    return;
  }
  
  // Simulate authentication (replace this with your authentication logic)
  else if(email === 'User@Example.com' && password === 'password') {
    resetLoginAttempts();
    alert('Login successful!');
    showSuccess();
    return;
  } else {
    loginAttempts++;
    if (loginAttempts >= maxAttempts) {
      blockUser();
    } else {
      showError();
      displayErrorMessage('Incorrect email or password. Please try again.');
    }
  }
}

// Function to block a user after too many login attempts
function blockUser() {
  loginAttempts = 0;
  blockEndTime = Date.now() + blockDuration;

  // Display countdown
  displayCountdown();
}

// Function to display countdown during a user block
function displayCountdown() {
  const countdownElement = document.getElementById('countdown');
  let timeLeft = Math.ceil((blockEndTime - Date.now()) / 1000);
  const countdownInterval = setInterval(function () {
    if (timeLeft > 0) {
      countdownElement.textContent = `Try again in ${timeLeft} seconds.`;
      timeLeft--;
    } else {
      clearInterval(countdownInterval);
      countdownElement.textContent = '';
      clearErrorMessage();
    }
  }, 1000);
}

// Function to reset login attempts and clear error messages
function resetLoginAttempts() {
  loginAttempts = 0;
  blockEndTime = 0;
  clearErrorMessage();
}

// Function to display an error message
function displayErrorMessage(message) {
  const errorMessageElement = document.getElementById('errorMessage');
  errorMessageElement.textContent = message;
}

// Function to clear the error message
function clearErrorMessage() {
  const errorMessageElement = document.getElementById('errorMessage');
  errorMessageElement.textContent = '';
}

// Function to validate a form before submission
function validateForm(event) {
  // Prevent the form from submitting by default
  event.preventDefault();

  // Get form elements
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');

  // Get error elements
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');

  // Reset previous error messages
  nameError.textContent = '';
  emailError.textContent = '';

  // Validate name (simple example, just checking if it's not empty)
  if (nameInput.value.trim() === '') {
    nameError.textContent = 'Name is required';
  }

  // Validate email using a simple regular expression
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = 'Invalid email address';
  }
}
}
let myInput = document.getElementById('myInput');
    myInput.addEventListener('keypress', function(event) {
      
        console.log('Key Code:', event.keyCode);
        console.log('Character:', String.fromCharCode(event.keyCode));
   });


  //  hover effects 
   const div = document.getElementById('btn');

        div.addEventListener('mouseover', function() {
       div.style.backgroundColor = 'pink';
}); 


const flower = document.querySelector('.flower');

// Create an animation object
const animation = flower.animate([
  { transform: 'scale(0.5)', opacity: 0 },
  { transform: 'scale(1)', opacity: 1 }
], {
  duration: 1000,
  iterations: Infinity,
  easing: 'ease-in-out'
});

// Start the animation
animation.play();


function admin(){
  const id = document.getElementById('id').value;
 
  if (id === '1234') {
    window.location.href = 'admin.html';
    return;
  }
}