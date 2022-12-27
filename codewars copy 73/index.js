let humanYearsCatYearsDogYears = function (humanYears) {
    if (humanYears === 1) {
        return [1, 15, 15];
    } else if (humanYears === 2) {
        return [2, 24, 24];
    } else {
        let catYears = 24 + 4 * (humanYears - 2);
        let dogYears = 24 + 5 * (humanYears - 2);
        return [humanYears, catYears, dogYears];
    };
}