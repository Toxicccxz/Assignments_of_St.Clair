/*
   New Perspectives on HTML and CSS, 7th Edition
   Tutorial 7
   Case Problem 2


   Filename: sb_script.js

   Purpose: The purpose of this program is to verify that the form
            passes an initial validation test.

            When the form is submitted, the onsubmit event handler
            verifies that the form data is complete and valid.
            An alert box is displayed notifying the user.

            The event function returns a value of false so that the
            student does not have to continually retype test values
            in the survey form.


*/

window.onload = init;

function init() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Data passes initial validation tests");
      return false;
   }
   
}

  
