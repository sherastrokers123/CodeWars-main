//The Feast of Many Beasts
/*
У всех животных праздник! Каждое животное приносит одно блюдо. Существует только одно правило: блюдо должно начинаться и заканчиваться теми же буквами, что и имя животного. Например, большая голубая цапля приносит чесночный наан, а цыпленок приносит шоколадный торт.

Напишите функциональный праздник, который принимает имя и блюдо животного в качестве аргументов и возвращает истинное или ложное, чтобы указать, разрешено ли зверю принести блюдо на праздник.

Предположим, что зверь и блюдо всегда являются строчными строками, и каждая из них имеет по крайней мере две буквы. зверь и блюдо могут содержать дефисы и пробелы, но они не появятся в начале или конце строки. Они не будут содержать цифр.
*/

function feast(beast, dish) {
    if (beast[0] == dish[0] && beast[beast.length - 1] == dish[dish.length - 1]) {
        return true;
    }
    else {
        return false;
    }
}

/* сравним начальные значения начальных элементов и сравним последние значения элементов
    вернем истину если все хоорошо и ложь если значения несоответсвуют
*/