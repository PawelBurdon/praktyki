function multiplyAsync(x, y){
    return myPromise = new Promise((resolve, reject) => {
        if(typeof(x) == 'number' && typeof(y) == 'number'){
            resolve(x*y);
        }else{
            reject("Złe argumenty. Musisz podac liczby");
        }
    });
}

multiplyAsync(5,3)
.then((result) =>{
    console.log("Wynik: " + result);
})
.catch(console.error);
