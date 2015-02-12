function *pluck(xs, key) {
    for (let x of xs) {
        yield x[key];
    }
}

export default pluck;
