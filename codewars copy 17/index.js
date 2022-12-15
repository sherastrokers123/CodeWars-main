function squareDigits(num) {
    // число преобразовать с строку
    let strNum = String(num);
    // строка с результатом
    let res = '';

    for (let i = 0; i < strNum.length; i++) {
        let square = parseInt(strNum[i]) * parseInt(strNum[i]);
        res = res + String(square);
    }
    return parseInt(res);
}
console.log(squareDigits());