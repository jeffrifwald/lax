import {assert} from 'chai';

import chain from '../src/chain';
import map from '../src/map';


describe('map', () => {
    it('should handle an array', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).map(x => x * x).toArray();

        assert.deepEqual(result, [1, 4, 9, 16]);
    });

    it('should handle a string', () => {
        let xs = 'abcd';
        let result = chain(xs).map(x => x + 'z').toArray();

        assert.deepEqual(result, ['az', 'bz', 'cz', 'dz']);
    });

    it('should handle a map', () => {
        let xs = new Map([[1, 1], [2, 2], [3, 3], [4, 4]]);
        let result = chain(xs).map(x => x[0] * x[0]).toArray();

        assert.deepEqual(result, [1, 4, 9, 16]);
    });

    it('should handle a set', () => {
        let xs = new Set([1, 2, 3, 4]);
        let result = chain(xs).map(x => x * x).toArray();

        assert.deepEqual(result, [1, 4, 9, 16]);
    });

    it('should work without a iteratee', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).map().toArray();

        assert.deepEqual(result, xs);
    });

    it('should work unchained', () => {
        let xs = [1, 2, 3, 4];
        let result = map(xs, x => x * x);

        assert.deepEqual(Array.from(result), [1, 4, 9, 16]);
    });

    it('should lazily pass the correct arguments', () => {
        let xs = [1, 2, 3, 4];
        let thisArg = {};
        let values = [];
        let indices = [];
        let arrays = [];
        let thisArgs = [];
        let result = chain(xs).map(function(y, i, ys) {
            values.push(y);
            indices.push(i);
            arrays.push(ys);
            thisArgs.push(this);

            return y + 1;
        }, thisArg);

        assert.deepEqual(values, []);
        assert.deepEqual(indices, []);
        assert.deepEqual(arrays, []);
        assert.deepEqual(thisArgs, []);
        assert.deepEqual(result.toArray(), [2, 3, 4, 5]);
        assert.deepEqual(values, [1, 2, 3, 4]);
        assert.deepEqual(indices, [0, 1, 2, 3]);
        assert.deepEqual(arrays, [xs, xs, xs, xs]);
        assert.deepEqual(thisArgs, [thisArg, thisArg, thisArg, thisArg]);
    });
});
