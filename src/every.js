function every(xs, fn) {
    let iter = xs[Symbol.iterator]();
    let result = true;

    for (let i = 0, x = iter.next(); !x.done && result; x = iter.next(), i++) {
        result = fn(x.value, i);
    }

    return result;
}

export default every;
