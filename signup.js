const signupForm = document.getElementById("signupForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
signupForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();
  if (password !== confirmPassword) {
    alert("Passwords do not match. Please try again.");
    return;
  }
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);
  alert(
    `Account created successfully for ${username}! Redirecting to login...`
  );
  window.location.href = "login.html";
});
