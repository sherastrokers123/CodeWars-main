function findMultiples(int, limit) {

    let arr = [];

    for (let i = int; i <= limit; i += int) {
        arr.push(i)
    }

    return arr

}