async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-input').value.trim();
    const email = document.querySelector('#email-input').value.trim();
    const password = document.querySelector('#password-input').value.trim();
  
    if (username && email && password) {
      const response = await fetch('/api/user', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
  
      if (response.ok) {
        document.location.replace('/user-profile/');
      } else {
        alert(response.statusText);
      };
    };
  };

document.querySelector('#create-account-submit').addEventListener('submit', signupFormHandler)