'use strict';

const inverse = function (lst, n = 0) {
    let lst_a = lst.slice(0, n);
    let lst_b = lst.slice(n, lst.length);
    if (n >= 0) {
        return lst_a.concat(lst_b.reverse());
    }
    return lst_a.reverse().concat(lst_b);
}

/*const inverse = function (lst, n = 0) {
    let a = Math.max(0, n);
    let b = Math.min(lst.length, lst.length - n);
    return lst.splice(a, b, lst.slice(a, b).reverse()); // почему-то не переворачиввет список
}*/
