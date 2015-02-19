function *rest(xs, n=1) {
    let iter = xs[Symbol.iterator]();
    let i = 0;
    let x = iter.next();

    while (i < n && !x.done) {
        x = iter.next();
        i += 1;
    }

    while (!x.done) {
        yield x.value;

        x = iter.next();
    }
}

export default rest;
