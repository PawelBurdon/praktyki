let now = 1;


 const pokaz = (x) => 
 fetch(`https://jsonplaceholder.typicode.com/posts/${x}`)
        .then(response => response.json())
        .then(post => {
            document.getElementById('title').innerHTML = post.title;
            document.getElementById('text').innerHTML = post.body;
        });

        pokaz(now)
    
const poprzedni = () => {
    if (now > 1) {
        now--;
        pokaz(now);
    }
};
const nastepny = () => {
    now++;
    pokaz(now);
};