function *reject(xs, predicate, thisArg) {
    let fn = thisArg ? predicate.bind(thisArg) : predicate;
    let i = 0;

    for (let x of xs) {
        if (!fn(x, i, xs)) {
            yield x;
        }

        i += 1;
    }
}

export default reject;
