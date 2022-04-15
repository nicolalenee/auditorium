async function updateProfileClickHandler(event) {
    event.preventDefault();

    const occupation = document.querySelector('#profession').value.trim();
    const location = document.querySelector('#region').value.trim();
    const phone_number = document.querySelector('#contact-number').value.trim();
    const website_url = document.querySelector('#website-url').value.trim();
    const bio = document.querySelector('#bio').value.trim();
    const media = document.querySelector('#media').value.trim();


    const response = await fetch(`/profile/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
            occupation,
            location,
            phone_number,
            website_url,
            bio,
            media
        }),
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/profile');
    }
    else {
        alert(response.statusText);
    }



}

document.querySelector('#update-submit-button').addEventListener('submit', updateProfileClickHandler);