function *chunk(xs, n) {
    let result = [];

    if (n < 1) {
        n = 1;
    }

    for (let x of xs) {
        if (result.length === n) {
            yield result;
            result = [];
        }

        result.push(x);
    }

    yield result;
}

export default chunk;
