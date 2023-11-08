function calculate() {
    let number1 = parseFloat(document.getElementById('num1').value);
    let number2 = parseFloat(document.getElementById('num2').value);
    let wybor1 = document.getElementById('wybor').value;
    let wynik1 = document.getElementById('wynik');

    let x;

    switch (wybor1) {
        case '1':
            x = number1 + number2;
            break;

        case '2':
            x = number1 - number2;
            break;

        case '3':
            x = number1 * number2;
            break;

        case '4':
            if(number1 === 0 || number2 === 0){
                wynik1.innerHTML = "Nie mozna dzielic przez 0"
            }else{
                x = number1 / number2
            }
            break;

        default: 
            wynik1.innerHTML =  "Cos zle podanie";
    }

    if (!isNaN(x)) {
        wynik1.innerHTML = x;
    }
    else {
        wynik1.innerHTML = "Cos zle podanie!";
    }
}