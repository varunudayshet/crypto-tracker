const signOutButton = document.getElementById("signOutButton");

signOutButton.addEventListener("click", function () {
  // Clear stored session-related data
  localStorage.removeItem("username");
  localStorage.removeItem("password");

  // Redirect to the login page
  alert("You have successfully signed out.");
  window.location.href = "login.html";
});
