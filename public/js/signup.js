//function to validate the password
// const validatePassword = function(password, confirmedPassword) {
//   if (password !== confirmedPassword) {
//     console.log('Passwords do not match! Try again!');
//     return false;
//   }
//   let regex = newRegex('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$');
//   if (!password.match(regex)) {
//     return false;
//     }
//   return true;
// };

async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector("#username-input").value.trim();
  const email = document.querySelector("#email-input").value.trim();
  const password = document.querySelector("#password-input").value.trim();
  const display_name = document
    .querySelector("#display-name-input")
    .value.trim();
  const account_type = document.querySelector('input[name="account-type"]:checked').value;

  if (username && email && password) {
    const response = await fetch("/user", {
      method: "post",
      body: JSON.stringify({
        display_name,
        account_type,
        username,
        email,
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

// document.querySelector('#create-account-submit').addEventListener('submit', signupFormHandler)
document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);