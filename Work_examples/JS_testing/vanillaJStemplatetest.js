//Needed to test with Jest
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
//


// Import the necessary modules
const cloneAndInsertUsername = require('./script'); // Import file2.js

// Define the test
describe('cloneAndInsertUsername', () => {
  test('should clone and insert username element correctly', () => {
    // Create a JSDOM instance
    const dom = new JSDOM(`
      <html>
        <body>
          <input id="newSignInName" />
          <input id="email" />
        </body>
      </html>
    `);

    // Set up the document and window objects from the JSDOM instance
    global.document = dom.window.document;
    global.window = dom.window;

    // // Call the function to be tested
    // const cloneAndInsertUsername = () => {
    //   const cloneElem = document.querySelector('#newSignInName').cloneNode(true);
    //   cloneElem.id = 'usernamehidden';
    //   document.querySelector('#email').before(cloneElem);
    // };

    // Call the function
    cloneAndInsertUsername();

    // Assert that the cloned element was inserted correctly
    const clonedElem = document.querySelector('#usernamehidden');
    expect(clonedElem).not.toBeNull(); // Assert that the cloned element exists
    expect(clonedElem.getAttribute('id')).toBe('usernamehidden'); // Assert that the cloned element has the correct ID
    expect(document.querySelector('#email').previousSibling).toBe(clonedElem); // Assert that the cloned element was inserted before the #email element
  });
});
