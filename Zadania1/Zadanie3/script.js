function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

function bubbleSortStr(arr) {
    for (let i = 1; i < arr.length; i++) {
        let temp = arr[i];
        let j = i - 1;

        while (j >= 0 && temp.length < arr[j].length) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = temp;
    }

    return arr;
}

function drugaLiczba() {
    const arr = ["asd", "asda", "asdzx", "zxcasd"];

    if (typeof arr[0] === 'string') {
        const secondLast = bubbleSortStr(bubbleSort(arr));
        console.log(secondLast[secondLast.length - 2]);
    } else if (typeof arr[0] === 'number') {
        console.log(bubbleSort(arr)[bubbleSort(arr).length - 2]);
    }
}
