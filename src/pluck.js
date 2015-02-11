function *pluck(xs, key) {
    let iter = xs[Symbol.iterator]();

    for (let x = iter.next(); !x.done; x = iter.next()) {
        yield x.value[key];
    }
}

export default pluck;
