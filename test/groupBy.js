import {assert} from 'chai';

import chain from '../src/chain';
import groupBy from '../src/groupBy';


describe('groupBy', () => {
    let evenOrOdd = x => x % 2 === 0 ? 'even' : 'odd';

    it('should handle an array', () => {
        let xs = [1, 1, 3, 3, 3, 3];
        let result = chain(xs).groupBy(x => x);

        assert.deepEqual(result, {
            1: [1, 1],
            3: [3, 3, 3, 3]
        });
    });

    it('should handle a string', () => {
        let xs = 'hello world';
        let result = chain(xs).groupBy(x => x);

        assert.deepEqual(result, {
            h: ['h'],
            e: ['e'],
            l: ['l', 'l', 'l'],
            o: ['o', 'o'],
            w: ['w'],
            r: ['r'],
            d: ['d'],
            ' ': [' ']
        });
    });

    it('should handle a set', () => {
        let xs = new Set([1, 1, 1, 2, 2, 3, 4, 4, 4]);
        let result = chain(xs).groupBy(evenOrOdd);

        assert.deepEqual(result, {
            even: [2, 4],
            odd: [1, 3]
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
        let result = chain(xs).groupBy(
            x => x[0] === x[1] ? 'keyIsValue' : 'keyIsNotValue'
        );

        assert.deepEqual(result, {
            keyIsValue: [[1, 1], [2, 2]],
            keyIsNotValue: [[3, '3'], [4, 'four'], ['five', 5]]
        });
    });

    it('should handle a string predicate', () => {
        let xs = [
            {name: 'John', id: 1},
            {name: 'John', id: 2},
            {name: 'Jane', id: 3}
        ];
        let result = chain(xs).groupBy('name');

        assert.deepEqual(result, {
            John: [
                {name: 'John', id: 1},
                {name: 'John', id: 2}
            ],
            Jane: [
                {name: 'Jane', id: 3}
            ]
        });
    });

    it('should work unchained', () => {
        let xs = [2, 3, 4, 5, 6];
        let result = groupBy(xs, evenOrOdd);

        assert.deepEqual(result, {
            even: [2, 4, 6],
            odd: [3, 5]
        });
    });

    it('should pass the correct arguments', () => {
        let xs = [1, 2, 3, 4, 5];
        let thisArg = {};
        let values = [];
        let indices = [];
        let arrays = [];
        let thisArgs = [];
        let result = chain(xs).groupBy(function(y, i, ys) {
            values.push(y);
            indices.push(i);
            arrays.push(ys);
            thisArgs.push(this);

            return y % 2 === 0 ? 'even' : 'odd';
        }, thisArg);

        assert.deepEqual(result, {
            even: [2, 4],
            odd: [1, 3, 5]
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
