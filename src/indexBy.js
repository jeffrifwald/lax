function indexBy(xs, predicate, thisArg) {
    let i = 0;
    let indices = {};
    let fn;

    if (typeof predicate === 'string') {
        fn = x => x[predicate];
    } else {
        fn = thisArg ? predicate.bind(thisArg) : predicate;
    }

    for (let x of xs) {
        indices[fn(x, i, xs)] = x;

        i += 1;
    }

    return indices;
}

export default indexBy;
