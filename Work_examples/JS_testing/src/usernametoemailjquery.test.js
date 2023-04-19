const jsdom = require("jsdom");
const { JSDOM } = jsdom;
// Import the necessary modules

const { window } = new JSDOM('<!doctype html><html><body></body></html>');

// Set up global variables to simulate a browser environment
global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};

// Load jQuery after setting up JSDOM
const $ = require('jquery');



// Set up the initial DOM state for testing
document.body.innerHTML = `
  <div id="newSignInName"></div>
  <input id="email">
`;

//This is to prevent autofill from taking Email as Username
const cloneAndInsertUsernamejQuery = function () {
  let cloneElem = $('#newSignInName').clone(true);

  // Firefox
  cloneElem.attr('id', 'usernamehidden');
  // Safari
  cloneElem.prop('autocomplete', 'username'); // Use prop() to set autocomplete attribute
  $('#email').before(cloneElem);
};

// Test the cloneAndInsertUsername function
test('Test cloneAndInsertUsername function', () => {
  // Call the function to be tested
  cloneAndInsertUsernamejQuery();

  // Assert that the DOM is updated as expected
  expect($('#usernamehidden').attr('id')).toBe('usernamehidden');
  expect($('#usernamehidden').prop('autocomplete')).toBe('username'); // Update the selector to #usernamehidden
});
