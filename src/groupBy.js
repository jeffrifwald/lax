function groupBy(xs, predicate, thisArg) {
    let i = 0;
    let groups = {};
    let fn;

    if (typeof predicate === 'string') {
        fn = x => x[predicate];
    } else {
        fn = thisArg ? predicate.bind(thisArg) : predicate;
    }

    for (let x of xs) {
        let key = fn(x, i, xs);

        if (groups[key]) {
            groups[key].push(x);
        } else {
            groups[key] = [x];
        }

        i += 1;
    }

    return groups;
}

export default groupBy;
