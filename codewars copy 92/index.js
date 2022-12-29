function calculateAge(birth, year) {

    if (birth - year === 1) {
        return `You will be born in 1 year.`
    } else if (birth - year > 1) {
        return `You will be born in ${Math.abs(year - birth)} years.`
    } else if (year - birth === 1) {
        return `You are 1 year old.`
    } else if (year - birth > 1) {
        return `You are ${year - birth} years old.`
    } else if (year - birth === 0) {
        return `You were born this very year!`
    }

}