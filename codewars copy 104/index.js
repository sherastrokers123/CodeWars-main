function well(test) {

    let num = test.filter(a => a == 'good').length

    if (num > 0 && num <= 2) {
        return 'Publish!'
    } else if (num > 2) {
        return 'I smell a series!'
    } else {
        return 'Fail!'
    }

}