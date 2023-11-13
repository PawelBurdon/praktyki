function sprawdz() {
    const text = document.getElementById('text').value;
    const resultElement = document.getElementById('wynik');

    if (palindrome(text)) {
        resultElement.innerHTML = "To jest palindrom";
    } else {
        resultElement.innerHTML = "To nie jest palindrom";
    }
}

function palindrome(str) {
    str = str.replace(/ /g, "").toLowerCase();
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}
