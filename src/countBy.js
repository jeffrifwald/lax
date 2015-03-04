function countBy(xs, predicate, thisArg) {
    let fn = thisArg ? predicate.bind(thisArg) : predicate;
    let i = 0;
    let counts = {};

    for (let x of xs) {
        let key = fn(x, i, xs);

        counts[key] = counts[key] ? counts[key] + 1 : 1;

        i += 1;
    }

    return counts;
}

export default countBy;
