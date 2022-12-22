// function getSum(a, b) {
//     let max = Math.max(a, b);
//     let min = Math.min(a, b);
//     return (max - min + 1) * (max + min) / 2;
// }


function getSum(a, b) {
    let max = Math.max(a, b);
    let min = Math.min(a, b);
    return (max + min) * (max - min + 1) / 2;
}
console.log(getSum(1, 6));


// математическая формула суммы от  a до b S = (a + b)(b - a + 1) / 2
/*
    function GetSum(a,b)
    {
    return (Math.abs(a - b) + 1) * (a+b) / 2;
    }
 */