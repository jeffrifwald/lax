function *takeWhile(xs, fn) {
    let iter = xs[Symbol.iterator]();

    for (let i = 0, x = iter.next(); !x.done; x = iter.next(), i++) {
        if (fn(x.value, i)) {
            yield x.value;
        } else {
            break;
        }
    }
}

export default takeWhile;
