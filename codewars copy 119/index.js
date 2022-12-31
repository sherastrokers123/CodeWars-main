
const totalLicks = (env) => {
    var licks = 252
    let challenge

    for (const effect in env) {
        if ((env[effect] > 0) && (!challenge || env[effect] > env[challenge])) {
            challenge = effect
        }
        licks += env[effect]
    }
    return `It took ${licks} licks to get to the tootsie roll center of a tootsie pop.` +
        (challenge ? ` The toughest challenge was ${challenge}.` : "")
}