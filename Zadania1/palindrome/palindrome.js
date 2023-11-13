const palindrome = () => {
    const tekst = document.getElementById('inp1').value;
    const wynik = document.getElementById('wynik');
    let reverse = '';

    for (let i = tekst.length - 1; i >= 0; i--) {
        reverse += tekst[i];
    }

    if (tekst == reverse) {
        wynik.innerHTML = 'To jest palindrom';
    } else {
        wynik.innerHTML = 'To nie jest palindrom';
    }
}