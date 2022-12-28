/**
 * В этом простом задании вам дается число и вы должны сделать его отрицательным. Но, может быть, число уже отрицательное?
 */

function makeNegative(num) {
    if (num > 0) {
        return -num;
    } else {
        return num;
    }
}
console.log(makeNegative(-9));