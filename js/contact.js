document.querySelector('#contact-form').addEventListener('submit', (e) => {
      try {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", "https://badboy.is-a.dev/receive/message", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
          message: e.target.elements.message.value,
          name: e.target.elements.name.value,
          email: e.target.elements.email.value
        }));
        alert("Message sent!");
      } catch(err) {
        alert("An Error occured:\n"+err);
      }
      e.preventDefault();
      e.target.elements.name.value = '';
      e.target.elements.email.value = '';
      e.target.elements.message.value = '';
    });
