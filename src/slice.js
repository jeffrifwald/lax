function *slice(xs, ...args) {
    let iter = xs[Symbol.iterator]();
    let start = 0;
    let stop = args[0];
    let step = args[2] || 1;
    let i = 0;
    let x, next;

    if (args.length > 1) {
        start = args[0];
        stop = args[1];
    }

    next = () => {
        for (let j = 0; j < step; j++) {
            x = iter.next();
            i += 1;
        }
    };

    for (let j = 0; j < start + 1; j++) {
        x = iter.next();
        i += 1;
    }

    while (!x.done && (stop === null || i <= stop)) {
        yield x.value;

        next();
    }
}

export default slice;
