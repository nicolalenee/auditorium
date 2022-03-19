async function loginFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector("#username-input").value.trim();
    const password = document.querySelector("#password-input").value.trim();
    // user model requires an email, display name, and account type as well, this will return an error
    if (username && password) {
      const response = await fetch("/api/user/login", {
        method: "POST",
        body: JSON.stringify({
          username,
          password,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert(response.statusText);
      }
    }
  }
  
  document
    .querySelector("#login-form")
    .addEventListener("submit", loginFormHandler);