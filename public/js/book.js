$(document).ready(function () {
  // Getting references to our form and input
  var signUpForm = $("#bookForm");
  var emailInput = $("#inputEmail");
  var passwordInput = $("#inputPassword");

  const checks = document.getElementsByName("check-select");

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function (event) {
    event.preventDefault();
    console.log("hit submit btn");
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
    };

    if (!userData.email || !userData.password) {
      return;
    }

    // grabbing all checked checkboxes to post to user
    let choices = "";
    function getChecked() {
      return $.map(
        $("input[name=check-select]:checked"),
        (elem) => elem.dataset.id
      );
    }
    choices += getChecked();

    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, choices);
    emailInput.val("");
    passwordInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, trip) {
    $.post("/api/signup", {
      email: email,
      password: password,
      trip: trip,
    })
      .then(function (data) {
        window.location.replace("/trip");
        //should point to the page that runs the user's trip
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    console.log("Error logging in");
    $("#alert .msg").text(err.responseJSON);
  }
});
