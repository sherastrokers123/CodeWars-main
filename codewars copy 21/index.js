/*
вывести 4,7,10,13 используя цикл
 */

let result = '';

for (let i = 4; i <= 13; i = i + 3) {
    result = result + i + ',';
}
console.log(result);