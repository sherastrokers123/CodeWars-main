
function switchItUp(number) {
    const strNumber = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine'];
    return strNumber[number]
}
console.log(switchItUp([6]));


// todo Другой вариант
// function switchItUp(number) {
//     switch (number) {
//         case 0:
//             return 'Zero';
//         case 1:
//             return 'One';
//         case 2:
//             return 'Two';
//         case 3:
//             return 'Three';
//         case 4:
//             return 'Four';
//         case 5:
//             return 'Five';
//         case 6:
//             return 'Six';
//         case 7:
//             return 'Seven';
//         case 8:
//             return 'Eight';
//         case 9:
//             return 'Nine';
//         default:
//             return 'Unknown number';
//     }
// }