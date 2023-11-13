const anagram = () =>{
    let wyraz1 = document.getElementById("inp1").value;
    let wyraz2 = document.getElementById("inp2").value
    let val1 = bubbleSort(stringToChar(wyraz1));
    let val2 = bubbleSort(stringToChar(wyraz2));
    let wynik = document.getElementById("wynik");

    if(val1.length === val2.length){
       wynik.innerHTML = "Są";
    }else{
        wynik.innerHTML = "Nie są";
    }
}

const stringToChar = (x) =>{
    let asciiNum = [];
    for(let i=0; i<x.length; i++){
        asciiNum[i]=x.charCodeAt(i);
    }
    return asciiNum;
}

function bubbleSort(arr){
    for (var i = 0; i < arr.length; i++) { 
        for (var j = 0; j < (arr.length - i - 1); j++) { 
            if (arr[j] > arr[j + 1]) { 
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}