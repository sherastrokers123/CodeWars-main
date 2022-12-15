// Remove First and Last Character

/*
   Это довольно просто. 
    Ваша цель - создать функцию, которая удаляет первый и последний символы строки. Вам дается один параметр, исходная строка. Вам не нужно беспокоиться со строками с менее чем двумя символами.
*/

function removeChar(str) {
    return str.slice(1, -1);
};
console.log(removeChar('alisher kakaxa'))




