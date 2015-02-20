function *initial(xs) {
    let citer = xs[Symbol.iterator]();
    let niter = xs[Symbol.iterator]();
    let curr = citer.next();
    let next = niter.next();

    next = niter.next();

    while (!next.done) {
        yield curr.value;

        curr = citer.next();
        next = niter.next();
    }
}

export default initial;
