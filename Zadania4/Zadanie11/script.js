const check = (response) => {
    if (response.status == 200) {
        return response.json();
    } else {
        throw new Error('Błąd');
    }
};

const show = (dataJSON) => {
    for (const post of dataJSON) {
        console.log('Title:', post.title);
        console.log('Body:', post.body);
    }
};

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(check)
    .then(show)
    .catch(error => console.error('Błąd:', error));