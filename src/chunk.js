function *chunk(xs, n) {
    let iter = xs[Symbol.iterator]();
    let result = [];

    if (n < 1) {
        n = 1;
    }

    for (let i = 0, x = iter.next(); !x.done; x = iter.next(), i++) {
        if (i === n) {
            yield result;
            result = [];
            i = 0;
        }

        result.push(x.value);
    }

    yield result;
}

export default chunk;
