
function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let errorMessage = document.getElementById("error-message");
  
    errorMessage.innerHTML = "";
  
    if (name.trim() =="") {
      errorMessage.innerHTML += "Name is required.<br>";
      return false;
    }
  
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      errorMessage.innerHTML += "Please enter a valid email address.<br>";
      return false;
    }
  
    if (password.length < 6) {
      errorMessage.innerHTML += "Password must be at least 6 characters long.<br>";
      return false;
    }
  
    if (password !== confirmPassword) {
      errorMessage.innerHTML += "Passwords do not match.<br>";
      return false;
    }
  
    alert("Form submitted successfully!");
    return true;
  }
  