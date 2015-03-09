import {assert} from 'chai';

import chain from '../src/chain';
import countBy from '../src/countBy';


describe('countBy', () => {
    let evenOrOdd = x => x % 2 === 0 ? 'even' : 'odd';

    it('should handle an array', () => {
        let xs = [1, 1, 3, 3, 3, 3];
        let result = chain(xs).countBy(x => x);

        assert.deepEqual(result, {
            1: 2,
            3: 4
        });
    });

    it('should handle a string', () => {
        let xs = 'hello world';
        let result = chain(xs).countBy(x => x);

        assert.deepEqual(result, {
            h: 1,
            e: 1,
            l: 3,
            o: 2,
            w: 1,
            r: 1,
            d: 1,
            ' ': 1
        });
    });

    it('should handle a set', () => {
        let xs = new Set([1, 1, 1, 2, 2, 3, 4, 4, 4]);
        let result = chain(xs).countBy(evenOrOdd);

        assert.deepEqual(result, {
            even: 2,
            odd: 2
        });
    });

    it('should handle a map', () => {
        let xs = new Map([
            [1, 1],
            [2, 2],
            [3, '3'],
            [4, 'four'],
            ['five', 5]
        ]);
        let result = chain(xs).countBy(
            x => x[0] === x[1] ? 'keyIsValue' : 'keyIsNotValue'
        );

        assert.deepEqual(result, {
            keyIsValue: 2,
            keyIsNotValue: 3
        });
    });

    it('should work unchained', () => {
        let xs = [2, 3, 4, 5, 6];
        let result = countBy(xs, evenOrOdd);

        assert.deepEqual(result, {
            even: 3,
            odd: 2
        });
    });

    it('should pass the correct arguments', () => {
        let xs = [1, 2, 3, 4, 5];
        let thisArg = {};
        let values = [];
        let indices = [];
        let arrays = [];
        let thisArgs = [];
        let result = chain(xs).countBy(function(x, i, xs) {
            values.push(x);
            indices.push(i);
            arrays.push(xs);
            thisArgs.push(this);

            return x % 2 === 0 ? 'even' : 'odd';
        }, thisArg);

        assert.deepEqual(result, {
            even: 2,
            odd: 3
        });
        assert.deepEqual(values, [1, 2, 3, 4, 5]);
        assert.deepEqual(indices, [0, 1, 2, 3, 4]);
        assert.deepEqual(arrays, [xs, xs, xs, xs, xs]);
        assert.deepEqual(
            thisArgs,
            [thisArg, thisArg, thisArg, thisArg, thisArg]
        );
    });
});
