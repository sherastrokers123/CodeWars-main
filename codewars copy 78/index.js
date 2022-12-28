function positiveSum(arr) {
    let result = arr.reduce((sum, number) => {
        return sum + Math.abs(number);
    });
    return result;
}
