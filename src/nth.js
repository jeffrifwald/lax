function nth(xs, n) {
    let iter = xs[Symbol.iterator]();

    for (
        let i = 0, x = iter.next();
        !x.done && i < n + 1;
        x = iter.next(), i++
    ) {
        if (i === n) {
            return x.value;
        }
    }
}

export default nth;
