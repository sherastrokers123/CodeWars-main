// Third Angle of a Triangle
/*
    Вам даны два внутренних угла (в градусах) треугольника.
    Напишите функцию, чтобы вернуть 3-ю.
    Примечание: будут проверяться только положительные целые числа.
*/

function otherAngle(a, b) {
    const sumTriangle = 180;
    return sumTriangle - a - b;
}