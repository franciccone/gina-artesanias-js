// SELECCIONO EL FORM

const form = document.getElementById('form');

// AGREGO UN EVENT LISTENER AL BOTÓN ENVIAR Y HAGO UNA FUNCIÓN CON FETCH PARA UTILIZAR JSONPLACEHOLDER

form.addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
        method: 'POST',
        body: JSON.stringify({
            postId: 1,
            id: 1,
            name: name,
            email: email,
            body: message,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
});
