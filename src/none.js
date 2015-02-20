function none(xs, predicate, thisArg) {
    let iter = xs[Symbol.iterator]();
    let result = true;
    let fn = thisArg ? predicate.bind(thisArg) : predicate;

    for (let i = 0, x = iter.next(); !x.done && result; x = iter.next(), i++) {
        result = !fn(x.value, i, xs);
    }

    return result;
}

export default none;
