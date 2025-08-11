document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("login-form");
  const signupForm = document.getElementById("signup-form");
  const formTitle = document.getElementById("form-title");

  document.getElementById("show-signup").addEventListener("click", () => {
    loginForm.style.display = "none";
    signupForm.style.display = "block";
    formTitle.textContent = "Sign Up";
  });

  document.getElementById("show-login").addEventListener("click", () => {
    signupForm.style.display = "none";
    loginForm.style.display = "block";
    formTitle.textContent = "Login";
  });

  // Login validation
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = loginForm.querySelector("input[type='email']").value;
    const password = loginForm.querySelector("input[type='password']").value;

    if (email && password) {
      // Simulate login success
      window.location.href = "dashboard.html";
    } else {
      alert("Please fill in all fields.");
    }
  });

  // Signup validation
  signupForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const inputs = signupForm.querySelectorAll("input");
    const username = inputs[0].value;
    const email = inputs[1].value;
    const password = inputs[2].value;
    const confirmPassword = inputs[3].value;

    if (!username || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Simulate signup success
    window.location.href = "dashboard.html";
  });
});
