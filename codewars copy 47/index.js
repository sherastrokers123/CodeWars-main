// If you can't sleep, just count sheep!!

/*
    Учитывая неотрицательное целое число, 3, 
    например, возвращают строку с шумом: "1 овца... 2 овцы... 3 овцы...". 
    Ввод всегда будет действительным, т.е. без отрицательных целых чисел.
*/

let countSheep = function (num) {
    let result = '';
    for (let i = 1; i <= num; i++) {
        result += i + ' sheep...';
    }
    return result;
}

console.log(countSheep(12));