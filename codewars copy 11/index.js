/*Найти максимальное и минимальное значения списка 
        Ваша задача состоит в том, чтобы сделать две функции (максимальные и минимальные, или максимальные и минимальные и т. д., в зависимости от языка), которые получают список целых чисел в качестве входных данных, и возвращают наибольшее и наименьшее число в этом списке соответственно.
*/

const min = function (list) {
    let minItem = list[0];
    for (let i = 1; i < list.length; i++)
        if (list[i] < minItem) {
            minItem = list[i];
        }
    return minItem;
}

const max = function (list) {
    let maxItem = list[0];
    for (let i = 1; i < list.length; i++) {
        if (list[i] > maxItem) {
            maxItem = list[i];
        }
    }
    return maxItem;
}
// elem[i] (текущий элемент)