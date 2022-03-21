/*Login form validation*/

document.addEventListener("DOMContentLoaded", (event) => {
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  var form = document.getElementById("form");
  form.addEventListener("submit", (e) => {
    loginvalid();
  });
});

function loginvalid() {
  if (username.value.trim() == "") {
    alert("Please Enter username");
    return false;
  }

  if (password.value.trim() == "") {
    alert("Please Enter password");
    return false;
  } else if (password.value.trim().length < 8) {
    alert("Your password must contain at least 8 characters");
  } else {
    window.location.href = "./bankpage.html";
    alert("Login Success");
  }
}

//Registration form validation

document.addEventListener("DOMContentLoaded", (event) => {
  var firstname = document.getElementById("firstname");
  var lastname = document.getElementById("lastname");
  var email = document.getElementById("email");

  var registerPassword = document.getElementById("registerPassword");

  var confirmPassword = document.getElementById("confirmPassword");

  var phoneNumber = document.getElementById("phoneNumber");

  var address = document.getElementById("address");

  var registerForm = document.getElementById("registerForm");

  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    registration();
  });
});

function registration() {
  if (firstname.value.trim() == "") {
    alert("Please enter your first name");
    return false;
  } else if (lastname.value.trim() == "") {
    alert("Please enter your last name");
    return false;
  } else if (email.value.trim() == "") {
    alert("Please enter your email");
    return false;
  } else if (registerPassword.value.trim() == "") {
    alert("Please enter your password");
    return false;
  } else if (confirmPassword.value.trim() == "") {
    alert("Please Confirm your password");
    return false;
  } else if (registerPassword.value.trim().length < 8) {
    alert("Password must contain 8 characters");
    return false;
  } else if (registerPassword.value !== confirmPassword.value) {
    alert(" Confirm Password is now matched");
    return false;
  } else if (phoneNumber.value.trim() == "") {
    alert("Please enter your Phone number");
    return false;
  } else if (address.value.trim() == "") {
    alert("Please enter your Address");
    return false;
  } else {
    window.location.href = "./bankpage.html";
    alert("Registration Success");
  }
}
