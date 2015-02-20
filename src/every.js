function every(xs, predicate, thisArg) {
    let result = true;
    let fn = thisArg ? predicate.bind(thisArg) : predicate;
    let i = 0;

    for (let x of xs) {
        result = fn(x, i, xs);

        if (!result) {
            break;
        }

        i += 1;
    }

    return !!result;
}

export default every;
