function *flatten(xs, deep=false) {
    for (let x of xs) {
        if (x[Symbol.iterator]) {
            if (deep) {
                yield *flatten(x, deep);
            } else {
                for (let y of x) {
                    yield y;
                }
            }
        } else {
            yield x;
        }
    }
}

export default flatten;
