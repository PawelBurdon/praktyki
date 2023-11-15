const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];

const polacz = (tab1, tab2) => tab1.concat(tab2);
    console.log(polacz(arr1,arr2));

const ostatni = (tab) => tab.reverse()[0];
    console.log(ostatni(numbers));

    numbers.reverse()

const zaczynaSie = (tab, x) => tab.filter((element) => element.startsWith(x)); 
    console.log(zaczynaSie(arr2, "A"));

const suma = (tab) => tab.reduce((res, ele) => res + ele);
    console.log(suma(numbers));

const mapaPotega = (tab) => tab.map((element) => Math.pow(element, 2) + 3);
    console.log(mapaPotega(numbers));

// Zadania dodatkowe
const parzyste = (tab) => tab.filter((element) => element % 2 == 0);
console.log(parzyste(numbers));
