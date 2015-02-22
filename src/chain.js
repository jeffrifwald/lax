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
import enumerate from './enumerate';
import get from './get';
import head from './head';
import includes from './includes';
import indexOf from './indexOf';
import initial from './initial';
import last from './last';
import map from './map';
import none from './none';
import nth from './nth';
import pluck from './pluck';
import range from './range';
import reject from './reject';
import repeat from './repeat';
import rest from './rest';
import size from './size';
import slice from './slice';
import some from './some';
import tail from './tail';
import take from './take';
import takeWhile from './takeWhile';
import tap from './tap';
import thru from './thru';
import without from './without';
import where from './where';


function chain(xs) {
    return {

        //returns a generator
        chain: () => chain(xs),
        chunk: (...args) => chain(chunk(xs, ...args)),
        compact: () => chain(compact(xs)),
        concat: (...args) => chain(concat(xs, ...args)),
        drop: (...args) => chain(drop(xs, ...args)),
        dropWhile: (...args) => chain(dropWhile(xs, ...args)),
        each: (...args) => chain(each(xs, ...args)),
        enumerate: () => chain(enumerate(xs)),
        filter: (...args) => chain(filter(xs, ...args)),
        forEach: (...args) => chain(forEach(xs, ...args)),
        initial: () => chain(initial(xs)),
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
        where: (...args) => chain(where(xs, ...args)),

        //returns a value
        all: (...args) => all(xs, ...args),
        any: (...args) => any(xs, ...args),
        contains: (...args) => contains(xs, ...args),
        every: (...args) => every(xs, ...args),
        first: () => first(xs),
        find: (...args) => find(xs, ...args),
        findIndex: (...args) => findIndex(xs, ...args),
        findWhere: (...args) => findWhere(xs, ...args),
        get: (...args) => get(xs, ...args),
        head: () => head(xs),
        includes: (...args) => includes(xs, ...args),
        indexOf: (...args) => indexOf(xs, ...args),
        last: () => last(xs),
        none: (...args) => none(xs, ...args),
        nth: (...args) => nth(xs, ...args),
        size: () => size(xs),
        some: (...args) => some(xs, ...args),

        //iterates and returns
        toArray() {
            let arr = [];

            for (let x of xs) {
                arr.push(x);
            }

            return arr;
        },

        toMap() {
            return new Map(xs);
        },

        toSet() {
            return new Set(xs);
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
