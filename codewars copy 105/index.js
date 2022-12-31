function updateLight(cur) {

    if (cur == 'green') {
        return 'yellow'
    } else if (cur == 'yellow') {
        return 'red'
    } else if (cur == 'red') {
        return 'green'
    }

}