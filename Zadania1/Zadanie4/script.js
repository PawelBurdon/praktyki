function anagram() {
    const text1 = document.getElementById('val1').value;
    const text2 = document.getElementById('val2').value;
    const wynik = document.getElementById('wynik');

    const sortString = str => str.split('').sort().join('');

    const cleanedWord1 = text1.replace(/\s/g, '').toLowerCase();
    const cleanedWord2 = text2.replace(/\s/g, '').toLowerCase();

    const result = sortString(cleanedWord1) === sortString(cleanedWord2);


    if(result){
        wynik.innerText = "Są";
    }else{
        wynik.innerText = "Nie sa";
    }    
}