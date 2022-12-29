function removeExclamationMarks(s) {
    return s.split('').filter(a => (a !== '!')).join('')
}