function *dropWhile(xs, fn) {
    let iter = xs[Symbol.iterator]();
    let drop = true;

    for (let i = 0, x = iter.next(); !x.done; x = iter.next(), i++) {
        if (drop) {
            drop = fn(x.value, i, xs);
        }

        if (!drop) {
            yield x.value;
        }
    }
}

export default dropWhile;
