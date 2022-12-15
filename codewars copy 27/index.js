function sumMix(x) {
    return x.map(n => parseInt(n)).reduce((total, num) => {
        return total + num;
    }, 0);
}


