function doubleChar(str) {
    return str.split('').map(x => x + x).join('')
}
console.log(doubleChar('String'));
