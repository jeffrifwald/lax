function some(xs, iteratee, thisArg) {
    let iter = xs[Symbol.iterator]();
    let result = false;
    let fn = thisArg ? iteratee.bind(thisArg) : iteratee;

    for (let i = 0, x = iter.next(); !x.done && !result; x = iter.next(), i++) {
        result = fn(x.value, i, xs);
    }

    return result;
}

export default some;
