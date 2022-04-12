document.querySelector('#contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    try {
        let resp = await fetch("https://api.badboy.is-a.dev/receiver", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                type: "message",
                message: e.target.elements.message.value,
                name: e.target.elements.name.value,
                email: e.target.elements.email.value
            })
        });
        alert("Message sent!");
        console.log(resp)
    } catch (err) {
        alert("An Error occured:\n" + err);
    }
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
});
