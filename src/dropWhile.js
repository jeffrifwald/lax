function *dropWhile(xs, predicate, thisArg) {
    let drop = true;
    let fn = thisArg ? predicate.bind(thisArg) : predicate;
    let i = 0;

    for (let x of xs) {
        if (drop) {
            drop = fn(x, i, xs);
        }

        if (!drop) {
            yield x;
        }

        i += 1;
    }
}

export default dropWhile;
