'use strict';

const inverse = (lst, n = 0) => {
    if (!Array.isArray(lst) || typeof n !== 'number' || Number.isNaN(n)) { // проверка на входгые данные
        return null;
    }

    if (lst.length === 0 || lst.length === 1) { // возврат того же списка
        return lst;
    }

    const lstFirstPart = lst.slice(0, n);
    const lstSecondPart = lst.slice(n);
    if (n >= 0) {
        return lstFirstPart.concat(lstSecondPart.reverse());
    }
    return lstFirstPart.reverse().concat(lstSecondPart);
}
