/**
 * Напишите функцию, которая вычисляет среднее значение чисел в данном списке.

    Примечание: Пустые массивы должны возвращать 0.
 */

/**
 * Напишите функцию, которая вычисляет среднее значение чисел в данном списке.

    Примечание: Пустые массивы должны возвращать 0.
 */

function findAverage(array) {
    return array.length == 0 ? 0 : array.reduce((sum, number) => sum + number) / array.length;
}

console.log(findAverage([1, 2, 3]));