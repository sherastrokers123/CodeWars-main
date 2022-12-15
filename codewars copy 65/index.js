function invert(array) {
    return array.map(a => {
        return a * -1;
    });
}
console.log(invert([1, 2, -34]));