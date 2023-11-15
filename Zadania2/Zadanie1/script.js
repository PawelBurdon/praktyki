const rekurencja = (x,y) => {
    if (y >= x){
        console.log(y);
        rekurencja(x,y-1);
    }
}

rekurencja(8,11)