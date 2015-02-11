function *takewhile(xs, fn) {
    let iter = xs[Symbol.iterator]();

    for (let i = 0, x = iter.next(); !x.done; x = iter.next()) {
        if (fn(x.value, i, xs)) {
            yield x.value;
        } else {
            break;
        }
    }
}

export default takewhile;
