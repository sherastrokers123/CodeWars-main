function positiveSum(arr) {
    let result = arr.reduce((sum, number) => {
        if (number > 0) {
            return sum + number;
        } else {
            return sum + 0;
        }
    }, 0);
    return result;
}
console.log(positiveSum([1, -2, 3, 4, 5]));