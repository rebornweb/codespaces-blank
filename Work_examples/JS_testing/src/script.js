
//This is to prevent autofill from taking Email as Username
  const cloneAndInsertUsername = () => {
    const cloneElem = document.querySelector('#newSignInName').cloneNode(true);
  
    // Firefox
    cloneElem.id = 'usernamehidden';
    // Safari
    cloneElem.autocomplete = 'username';
    document.querySelector('#email').before(cloneElem);
  };
  
  
  module.exports = cloneAndInsertUsername;
 