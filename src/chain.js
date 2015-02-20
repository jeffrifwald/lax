import all from './all';
import any from './any';
import chunk from './chunk';
import compact from './compact';
import concat from './concat';
import contains from './contains';
import drop from './drop';
import dropWhile from './dropWhile';
import each from './each';
import every from './every';
import filter from './filter';
import first from './first';
import forEach from './forEach';
import head from './head';
import includes from './includes';
import initial from './initial';
import map from './map';
import none from './none';
import nth from './nth';
import pluck from './pluck';
import range from './range';
import reject from './reject';
import repeat from './repeat';
import rest from './rest';
import slice from './slice';
import some from './some';
import tail from './tail';
import take from './take';
import takeWhile from './takeWhile';
import tap from './tap';
import thru from './thru';
import without from './without';


function chain(xs) {
    return {
        all: (...args) => chain(all(xs, ...args)),
        any: (...args) => chain(any(xs, ...args)),
        chain: () => chain(xs),
        chunk: (...args) => chain(chunk(xs, ...args)),
        compact: (...args) => chain(compact(xs, ...args)),
        concat: (...args) => chain(concat(xs, ...args)),
        contains: (...args) => chain(contains(xs, ...args)),
        drop: (...args) => chain(drop(xs, ...args)),
        dropWhile: (...args) => chain(dropWhile(xs, ...args)),
        each: (...args) => chain(each(xs, ...args)),
        every: (...args) => chain(every(xs, ...args)),
        first: (...args) => chain(first(xs, ...args)),
        filter: (...args) => chain(filter(xs, ...args)),
        forEach: (...args) => chain(forEach(xs, ...args)),
        head: (...args) => chain(head(xs, ...args)),
        includes: (...args) => chain(includes(xs, ...args)),
        initial: (...args) => chain(initial(xs, ...args)),
        map: (...args) => chain(map(xs, ...args)),
        none: (...args) => chain(none(xs, ...args)),
        nth: (...args) => chain(nth(xs, ...args)),
        pluck: (...args) => chain(pluck(xs, ...args)),
        range: (...args) => chain(range(xs, ...args)),
        repeat: (...args) => chain(repeat(...args)),
        reject: (...args) => chain(reject(xs, ...args)),
        rest: (...args) => chain(rest(xs, ...args)),
        slice: (...args) => chain(slice(xs, ...args)),
        some: (...args) => chain(some(xs, ...args)),
        tap: (...args) => chain(tap(xs, ...args)),
        tail: (...args) => chain(tail(xs, ...args)),
        take: (...args) => chain(take(xs, ...args)),
        takeWhile: (...args) => chain(takeWhile(xs, ...args)),
        thru: (...args) => chain(thru(xs, ...args)),
        without: (...args) => chain(without(xs, ...args)),
        toArray: () => {
            let arr = [];

            for (let x of xs) {
                arr.push(x);
            }

            return arr;
        },

        [Symbol.iterator]: function*() {
            for (let x of xs) {
                yield x;
            }
        }
    };
}

export default chain;