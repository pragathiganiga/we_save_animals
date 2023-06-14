

// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault(); 

//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var message = document.getElementById('message').value;

//     console.log('Name:', name);
//     console.log('Email:', email);
//     console.log('Message:', message);
//     document.getElementById('contact-form').reset();
//     alert('Form Submitted') ;
//   });
const scriptURL = "https://script.google.com/macros/s/AKfycbxt9twrg4blWCxymRE7miUEVJyt78kBsoSKTHm4h9URl0AR7FqWbqmleILmbrfU79Xp/exec"
    const form = document.forms['contact-form']

    form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => console.log("Success", response))
            .catch(error => console.error('Error', error.message))

        alert('Form Submitted!')
    })
 
  
  