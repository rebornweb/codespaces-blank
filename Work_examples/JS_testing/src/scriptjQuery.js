
//This is to prevent autofill from taking Email as Username
const cloneAndInsertUsernamejQuery = function () {
  let cloneElem = $('#newSignInName').clone(true);

  // Firefox
  cloneElem.attr('id', 'usernamehidden');
  // Safari
  cloneElem.prop('autocomplete', 'username'); // Use prop() to set autocomplete attribute
  $('#email').before(cloneElem);
};
  
  module.exports = cloneAndInsertUsernamejQuery;
 