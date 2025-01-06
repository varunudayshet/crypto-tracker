const loginForm = document.getElementById("loginForm");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const username = usernameInput.value.trim();
  const password = passwordInput.value.trim();
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");
  if (username === storedUsername && password === storedPassword) {
    alert("Login successful! Redirecting to dashboard...");
    window.location.href = "index.html";
  } else {
    alert("Invalid username or password. Please try again.");
  }
});
