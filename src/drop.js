function *drop(xs, n) {
    let iter = xs[Symbol.iterator]();

    for (let i = 0, x = iter.next(); !x.done; x = iter.next(), i++) {
        if (i >= n) {
            yield x.value;
        }
    }
}

export default drop;
