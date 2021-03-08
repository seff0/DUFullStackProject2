$(document).ready(function () {
    // Getting references to our form and input
    var loginForm = $("#loginForm");
    var emailInput = $("#inputEmail");
    var passwordInput = $("#inputPassword");
  
    // When the signup button is clicked, we validate the email and password are not blank
    loginForm.on("submit", function (event) {
      event.preventDefault();
      console.log("hit submit btn");
      var userData = {
        email: emailInput.val().trim(),
        password: passwordInput.val().trim(),
      };
  
      if (!userData.email || !userData.password) {
        return;
      }
  
      // If we have an email and password, run the signUpUser function
      loginUser(userData.email, userData.password);
      emailInput.val("");
      passwordInput.val("");
    });
  
    // Does a post to the signup route. If successful, we are redirected to the members page
    // Otherwise we log any errors
    function loginUser(email, password) {
      $.post("/api/login", {
        email: email,
        password: password,
      })
        .then(function (data) {
          window.location.replace("/favorites");
          //should point to the favorites page
          // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(handleLoginErr);
    }
  
    function handleLoginErr(err) {
      console.log("Error logging in");
      $("#alert .msg").text(err.responseJSON);
    }
  });
  