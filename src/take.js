function *take(xs, n) {
    let iter = xs[Symbol.iterator]();

    for (let i = 0, x = iter.next(); !x.done && i < n; x = iter.next(), i++) {
        yield x.value;
    }
}

export default take;
