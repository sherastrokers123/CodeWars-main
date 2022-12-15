function hello(name) {
    if (!name) {
        name = 'world';
    }
    return `Hello, ${name[0].toUpperCase() + name.toLowerCase().slice(1)}!`;
}
console.log(hello('AlisheR'));