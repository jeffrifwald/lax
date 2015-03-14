function every(xs, iteratee, thisArg) {
    let result = true;
    let fn = thisArg ? iteratee.bind(thisArg) : iteratee;
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
