import {assert} from 'chai';

import chain from '../src/chain';
import filter from '../src/filter';


describe('filter', () => {
    it('should handle an array', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).filter(x => x > 2).toArray();

        assert.deepEqual(result, [3, 4]);
    });

    it('should handle a string', () => {
        let xs = 'abcd';
        let result = chain(xs).filter(x => x === 'c').toArray();

        assert.deepEqual(result, ['c']);
    });

    it('should handle a map', () => {
        let xs = new Map([[1, 1], [2, 2], [3, 3], [4, 4]]);
        let result = chain(xs).filter(x => x[0] > 2).toArray();

        assert.deepEqual(result, [[3, 3], [4, 4]]);
    });

    it('should handle a set', () => {
        let xs = new Set([1, 2, 3, 4]);
        let result = chain(xs).filter(x => x > 2).toArray();

        assert.deepEqual(result, [3, 4]);
    });

    it('should work unchained', () => {
        let xs = [1, 2, 3, 4];
        let result = filter(xs, x => x > 2);

        assert.deepEqual(Array.from(result), [3, 4]);
    });

    it('should lazily pass the correct arguments', () => {
        let xs = [1, 2, 3, 4];
        let thisArg = {};
        let values = [];
        let indices = [];
        let arrays = [];
        let thisArgs = [];
        let result = chain(xs).filter(function(y, i, ys) {
            values.push(y);
            indices.push(i);
            arrays.push(ys);
            thisArgs.push(this);

            return y < 4;
        }, thisArg);

        assert.deepEqual(values, []);
        assert.deepEqual(indices, []);
        assert.deepEqual(arrays, []);
        assert.deepEqual(thisArgs, []);
        assert.deepEqual(result.toArray(), [1, 2, 3]);
        assert.deepEqual(values, [1, 2, 3, 4]);
        assert.deepEqual(indices, [0, 1, 2, 3]);
        assert.deepEqual(arrays, [xs, xs, xs, xs]);
        assert.deepEqual(thisArgs, [thisArg, thisArg, thisArg, thisArg]);
    });
});
