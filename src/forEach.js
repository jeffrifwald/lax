function forEach(xs, fn) {
    let iter = xs[Symbol.iterator]();

    for (let i = 0, x = iter.next(); !x.done; x = iter.next(), i++) {
        fn(x.value, i, xs);
    }
}

export default forEach;
