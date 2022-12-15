
// 7Reverse words
/*
    Выполните функцию, которая принимает строковый параметр, и измените каждое слово в строке. Все пробелы в строке должны быть сохранены.
*/

// function reverseWords(str) {
//     return str.split('').reverse().join('');
// }

function reverseWords(str) {
    return str.split(' ').map(function (a) {
        return a.split('').reverse().join('');
    }).join(' ');

}
console.log(reverseWords('This is an example!'));




