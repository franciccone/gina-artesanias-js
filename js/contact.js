// TRAIGO TODO LO QUE NECESITO DEL HTML

const form = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    message: document.getElementById('message'),
    submit: document.getElementById('submit'),
    alerts: document.getElementById('form-alerts'),
};

// AGREGO EVENT AL BOTÓN SUBMIT

form.submit.addEventListener('click', () => {
    const request = new XMLHttpRequest();

    request.onload = () => {
        let responseObject = null;

        try {
            responseObject = JSON.parse(request.responseText);
        }catch (e) {
            console.error('No se pudo parsear el JSON')
        }

        if (responseObject) {
            handleResponse(responseObject);
        }
    };

    const requestData = `name=${form.name.value}&email=${form.email.value}&message=${form.message.value}`;

    console.log(requestData);

    request.open('post', '../php/post.php');
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send(requestData);

});

function handleResponse (responseObject) {
    if (responseObject.ok) {
        location.href = '../index.html';
    } else {
        while (form.alerts.firstChild) {
            form.alerts.removeChild(form.alerts.firstChild);
        }
        
        responseObject.alerts.forEach((alert) => {
            const li = document.createElement('li');
            li.textContent = alert;
            form.alerts.appendChild(li);
        });

        form.alerts.style.display = 'block';
    }
}