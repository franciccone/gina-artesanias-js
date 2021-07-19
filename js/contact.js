// LLAMO AL FORMULARIO

const form = document.getElementById('form-api')

// AGREGO EVENTO AL BOTÓN ENVIAR Y DETECTO LOS CAMPOS DEL FORMULARIO

form.addEventListener('submit', function(e) {
    e.preventDefault();

    let info = new FormData(form);

    console.log(info)
    console.log(info.get('name'))
    console.log(info.get('email'))
    console.log(info.get('message'))

    fetch('./php/post.php',{
        method: 'POST',
        body: info
    })

    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
})