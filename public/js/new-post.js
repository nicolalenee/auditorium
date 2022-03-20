async function postFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('#title-input').value;
    const content = document.querySelector('#content-input').value;

    if (title && content) {
      const response = await fetch('/api/post/', {
        method: 'POST',
        body: JSON.stringify({
          title,
          content
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }

    }
  
  document.querySelector('#new-post-form').addEventListener('submit', postFormHandler);