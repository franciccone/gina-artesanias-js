const form = document.getElementById('form');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

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
