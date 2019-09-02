'use strict';

const inverse = (lst, n = 0) => {
    if (!Array.isArray(lst) || typeof n !== 'number' || isNaN(n)) { // проверка на входгые данные
        return null;
    }

    if (lst.length === 0 || lst.length === 1) { // возврат того же списка
        return lst;
    }

    let lst_a = lst.slice(0, n);
    let lst_b = lst.slice(n);
    if (n >= 0) {
        return lst_a.concat(lst_b.reverse());
    }
    return lst_a.reverse().concat(lst_b);
}
