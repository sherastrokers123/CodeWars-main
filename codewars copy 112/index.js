function removeEveryOther(arr) {
    return arr.filter((item, index) => index % 2 == 0);
}
console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));