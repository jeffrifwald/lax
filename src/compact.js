function *compact(xs) {
    for (let x of xs) {
        if (x) {
            yield x;
        }
    }
}

export default compact;
