//Найти наименьшее целое число в массиве
/*
Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.

Например:

Учитывая [34, 15, 88, 2] ваше решение вернет 2

Учитывая [34, -345, -1, 100] ваше решение вернет -345

Для целей этой ката вы можете предположить, что предоставленный массив не будет пустым.
*/

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         return Math.min(...args);
//     }
// } 


class SmallestIntegerFinder {
    findSmallestInt(args) {
        let numMin = args[0];
        for (let i = 1; i < args.length; i++) {
            if (args[i] < numMin) {
                numMin = args[i];
            } else {
                return false;
            }
        }
        return numMin;
    }
}