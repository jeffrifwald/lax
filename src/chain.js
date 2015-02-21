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
import find from './find';
import findIndex from './findIndex';
import findWhere from './findWhere';
import forEach from './forEach';
import head from './head';
import includes from './includes';
import indexOf from './indexOf';
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

        //returns a generator
        chain: () => chain(xs),
        chunk: (...args) => chain(chunk(xs, ...args)),
        compact: (...args) => chain(compact(xs, ...args)),
        concat: (...args) => chain(concat(xs, ...args)),
        drop: (...args) => chain(drop(xs, ...args)),
        dropWhile: (...args) => chain(dropWhile(xs, ...args)),
        each: (...args) => chain(each(xs, ...args)),
        filter: (...args) => chain(filter(xs, ...args)),
        forEach: (...args) => chain(forEach(xs, ...args)),
        initial: (...args) => chain(initial(xs, ...args)),
        map: (...args) => chain(map(xs, ...args)),
        pluck: (...args) => chain(pluck(xs, ...args)),
        range: (...args) => chain(range(...args)),
        repeat: (...args) => chain(repeat(xs, ...args)),
        reject: (...args) => chain(reject(xs, ...args)),
        rest: (...args) => chain(rest(xs, ...args)),
        slice: (...args) => chain(slice(xs, ...args)),
        tap: (...args) => chain(tap(xs, ...args)),
        tail: (...args) => chain(tail(xs, ...args)),
        take: (...args) => chain(take(xs, ...args)),
        takeWhile: (...args) => chain(takeWhile(xs, ...args)),
        thru: (...args) => chain(thru(xs, ...args)),
        without: (...args) => chain(without(xs, ...args)),

        //returns a value
        all: (...args) => all(xs, ...args),
        any: (...args) => any(xs, ...args),
        contains: (...args) => contains(xs, ...args),
        every: (...args) => every(xs, ...args),
        first: (...args) => first(xs, ...args),
        find: (...args) => find(xs, ...args),
        findIndex: (...args) => findIndex(xs, ...args),
        findWhere: (...args) => findWhere(xs, ...args),
        head: (...args) => head(xs, ...args),
        includes: (...args) => includes(xs, ...args),
        indexOf: (...args) => indexOf(xs, ...args),
        none: (...args) => none(xs, ...args),
        nth: (...args) => nth(xs, ...args),
        some: (...args) => some(xs, ...args),

        //iterates and returns
        toArray() {
            let arr = [];

            for (let x of xs) {
                arr.push(x);
            }

            return arr;
        },

        toString() {
            let str = '';

            for (let x of xs) {
                str += x;
            }

            return str;
        },

        //iterator
        *[Symbol.iterator]() {
            for (let x of xs) {
                yield x;
            }
        }
    };
}

export default chain;
