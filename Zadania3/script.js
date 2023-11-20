const books = [
    {title: 'Total loss 100', pages: 600, genre: 'fantasy', rating: 7},
    {title: 'Total enlightenment', pages: 250, genre: 'romance', rating: 4},
    {title: 'Big loss', pages: 400, genre: 'fantasy', rating: 2},
    {title: 'Tenth Joy', pages: 32, genre: 'action', rating: 9},
    {title: 'Quickfix number 4', pages: 15, genre: 'fantasy', rating: 8},
    {title: 'World Ender 3', pages: 199, genre: 'fantasy', rating: 1},
    {title: 'Paranormal', pages: 200, genre: 'thriller', rating: 5},
];

const compose = (...fns) => (x) => fns.reduce((acc, fn) => fn(acc), x);
// Zadanie 6
const parzysteAndGenreY = (list) => list.filter((book) => book.genre.endsWith("y") && book.pages % 2 === 0);
const iloscLiter = (book) => book.reduce((literki, book) => literki + book.title.replace(/\s/g, '').length, 0);
let wynik = compose(parzysteAndGenreY, iloscLiter);
console.log(wynik(books));

//Zadanie 7
const znajdz = (list) => list.filter((book) => /\d+/.test(book.title) && book.pages%2 == 1 && book.rating > 5);
const ilosc = (book) => book.reduce((totalPositiveRatings) => totalPositiveRatings + 1, 0);
let wynik2 = compose(znajdz, ilosc);
console.log(wynik2(books));

//Zadanie 8
const sort = (list) => list.sort((a, b) => b.title.length - a.title.length);
const titles = (list) => list.map(({title}) => title);
let wynik3 = compose(sort, titles);
console.log(wynik3(books)[1]);