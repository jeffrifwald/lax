function *initial(xs) {
    let currIter = xs[Symbol.iterator]();
    let nextIter = xs[Symbol.iterator]();
    let curr = currIter.next();
    let next = nextIter.next();

    next = nextIter.next();

    while (!next.done) {
        yield curr.value;

        curr = currIter.next();
        next = nextIter.next();
    }
}

export default initial;
