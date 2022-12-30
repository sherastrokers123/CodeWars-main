function isOpposite(s1, s2) {

    if (!s1.length || s1.length !== s2.length) {
        return false
    } else {

        let lo = s1.split('').map(a => a == a.toLowerCase())
        let up = s2.split('').map(a => a == a.toUpperCase())

        return lo.every((a, i) => a === up[i])


    }


}