function *map(xs, fn) {
    let iter = xs[Symbol.iterator]();

    for (let i = 0, x = iter.next(); !x.done; x = iter.next(), i++) {
        yield fn(x.value, i);
    }
}

export default map;
