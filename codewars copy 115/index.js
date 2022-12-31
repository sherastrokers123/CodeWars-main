const smallEnough = (a, limit) => a.every(element => element <= limit);

function smallEnough(a, limit) {
    return a.every(x => x <= limit);
}