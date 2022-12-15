/*Учитывая массив целых чисел, верните новый массив с удвоенным значением.

Например:

[1, 2, 3] --> [2, 4, 6] */

function maps(x) {
    return x.map(function (number) {
        return number * 2;
    })
}
console.log(maps([2, 4, 6, 6]));
