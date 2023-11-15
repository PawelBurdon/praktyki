function sprawdz(x){
    let tab = [10, 11, "ania", 11];
    console.log(tab);
    console.log(znajdz(tab,x));
}

function znajdz(tab, x){
    let arr = [];
    let z = 0;
    for(let i=0; i < tab.length; i++){
        if(tab[i]==x){
            arr[z] = tab[i];
            z++;
        }
    }
    if(z>0) {
        return arr;
    }else {
        return null;
    }
}