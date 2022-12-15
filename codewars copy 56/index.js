/**
 Ваша задача - создать функцию, которая выполняет четыре основные математические операции.

Функция должна принимать три аргумента - operation(string/char), value1(number), value2(number).

Функция должна возвращать результат чисел после применения выбранной операции.

Примеры (оператор, value1, value2) --> вывод
'+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7

 */

function basicOp(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
        default:
            return 0;
    }
}
console.log(basicOp('+', 2, 2));
