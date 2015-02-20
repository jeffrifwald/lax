function *tap(xs, predicate, thisArg) {
    let fn = thisArg ? predicate.bind(thisArg) : predicate;
    let i = 0;

    for (let x of xs) {
        fn(x, i, xs);
        i += 1;
    }

    yield xs;
}

export default tap;
