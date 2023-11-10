const arr1 = ["Anna", "Maria", "Marek", "Tomasz"];

const filterNames = (nameFilter) => nameFilter.filter(name => name.length <= 5 && name.endsWith('ek'));

console.log(filterNames(arr1));