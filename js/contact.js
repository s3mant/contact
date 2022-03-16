document.querySelector('#contact-form').addEventListener('submit', (e) => {
      try {
        var xhr = new window.XMLHttpRequest();
        xhr.open("POST", "https://badboy.is-a.dev/receiver", true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify({
          type: "message",
          message: e.target.elements.message.value,
          name: e.target.elements.name.value,
          email: e.target.elements.email.value
        }));
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
            alert("Message sent!");
            console.log(xhr.response)
          } else {
            alert("Couldnt deliver the message.")
          }
        }
      } catch(err) {
        alert("An Error occured:\n"+err);
      }
      e.preventDefault();
      e.target.elements.name.value = '';
      e.target.elements.email.value = '';
      e.target.elements.message.value = '';
    });
