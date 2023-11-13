function drugaLiczba() {

    const arr = ['slowa', 'roslinki', 'psy'];
    let numer;

    if (typeof arr[0] === 'string') {
        for (let i = 0; i <= arr.length; i++) {
            const wynik = arr.sort((a, b) => b.length - a.length);
            console.log(wynik[1]);
        }
    } else if (typeof arr[0] === 'number') {
        for (let i = 0; i <= arr.length; i++) {
            arr.sort();
            arr.reverse();
            numer = arr[1];
        }
        console.log(numer);
    }
}