
//Grasshopper - Summation



/*Резюме

Напишите программу, которая находит суммирование каждого числа от 1 до числа. Число всегда будет положительным целым числом больше 0.

Например (Вход -> Выход): 

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

function grow(x) {
    return x.reduce((acc, i) => acc * i);
};
console.log(grow([1, 2, 3, 4,]));
*/

let summation = function (num) {
    let sum = 0;
    for (let i = 0; i <= num; i++) {
        sum = sum + i;
    }
    return sum;
};
console.log(summation(123));

