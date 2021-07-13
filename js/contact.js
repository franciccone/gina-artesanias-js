const form = {
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    message: document.getElementById('message'),
    submit: document.getElementById('btn-submit'),
    reset: document.getElementById('btn-reset'),
};

form.submit.addEventListener('click', () => {
    const request = new XMLHttpRequest();

    request.onload = () => {
        console.log(request.responseText);
    }

    const requestData = `name=${form.name.value}&email=${form.email.value}&message=${form.message.value}`;
    console.log(requestData);

    request.open('post', 'check-login.php')
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send(requestData);
});