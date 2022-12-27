/**
 * Создайте функцию, называемую ярлыком, чтобы удалить строчные гласные (a, e, i, o, u ) в данной строке.
 */

function shortcut(string) {
    return string.replace(/[aeiou]/gi, '');
}

console.log(shortcut('alisher'));