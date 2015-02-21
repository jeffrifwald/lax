function find(xs, predicate, thisArg) {
    let fn = thisArg ? predicate.bind(thisArg) : predicate;
    let i = 0;

    for (let x of xs) {
        if (fn(x, i, xs)) {
            return x;
        }

        i += 1;
    }
}

export default find;
