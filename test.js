fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH', 
    body: JSON.stringify({
        title: 'Test from Zachy'
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin' : 'http://localhost:3000'

    },
})
    .then(response => response.json())
    .then(data => console.log(data));