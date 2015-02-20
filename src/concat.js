function *concat(...args) {
    for (let xs of args) {
        for (let x of xs) {
            yield x;
        }
    }
}

export default concat;
