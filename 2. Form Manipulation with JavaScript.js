
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const messageContainer = document.getElementById('messageContainer');

    form.addEventListener('submit', event => {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        const userData = {
            name: name,
            email: email,
            message: message
        };

        messageContainer.innerHTML = `<pre>${JSON.stringify(userData, null, 2)}</pre>`;
    });
});

