//Training JS #7: if..else and ternary operator
/*
    Полная функция saleHotdogs/SaleHotDogs/sale_hotdogs, функция принимает 1 параметр:n, 
    n - количество хот-догов, которые купит клиент, разные номера имеют разные цены (см. следующую таблицу),
     верните, сколько денег клиент потратит на покупку этого количества хот-догов.


number of hotdogs	price per unit (cents)
n < 5	100
n >= 5 and n < 10	95
n >= 10	90
*/
function saleHotdogs(n) {
    let money = 0
    if (n < 5) {
        return money = n * 100;
    } if (n < 10) {
        return money = n * 95;
    } if (n >= 10) {
        return money = n * 90;
    }
    return money;
}
console.log(saleHotdogs(10));