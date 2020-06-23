var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element);
}

array.forEach(element => {
    console.log(element);
});