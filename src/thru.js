function *thru(xs, predicate, thisArg) {
    let fn = thisArg ? predicate.bind(thisArg) : predicate;
    let i = 0;

    for (let x of xs) {
        yield fn(x, i, xs);
        i += 1;
    }
}

export default thru;
