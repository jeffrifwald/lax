function *compact(xs) {
    let iter = xs[Symbol.iterator]();

    for (let x = iter.next(); !x.done; x = iter.next()) {
        if (x.value) {
            yield x.value;
        }
    }
}

export default compact;
