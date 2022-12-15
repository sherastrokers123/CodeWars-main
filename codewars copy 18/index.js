// Removing Elements

/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
*/

function removeEveryOther(arr) {
    return arr.filter((item, index) => index % 2 == 0);
}
console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));