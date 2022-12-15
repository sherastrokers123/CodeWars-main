function isPalindrome(str) {
    //  нижний регистр
    str = str.toLowerCase();
    // строку в массив
    let strArr = str.split('');
    // развернеули разбирую строку
    strArr = strArr.reverse();
    // слепили строку обратно
    strArr = strArr.join('');

    if (str == strArr) {
        return true;
    } else {
        return false;
    }

}

console.log(isPalindrome('toot'));
