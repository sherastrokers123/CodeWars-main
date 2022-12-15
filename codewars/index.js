// const stringToNumber = function (str) {
//     const parse = parseInt(str, 10);
//     if (isNaN(parse)) {
//         return null;
//     } else {
//         return parse;
//     }
// };
// console.log(stringToNumber("463"));
// console.log(stringToNumber(123));

// let stringToNumber = function (str) {
//     return Number(str);
// }
// console.log(stringToNumber('234'));

// let numberToString = function (num) {
//     return String(num);
// };
// console.log(typeof numberToString(123));

const stringToNumber = function (str) {
    return Number(str);
}
console.log(stringToNumber('123'));
console.log(typeof stringToNumber('123'));