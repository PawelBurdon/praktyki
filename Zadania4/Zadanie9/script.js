const myPromise = new Promise((resolve) => {
    setTimeout(() => resolve("Udało się"), 5000);
})

myPromise
.then(console.log);