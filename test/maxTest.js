import {assert} from 'chai';

import chain from '../src/chain';
import max from '../src/max';


describe('max', () => {
    it('should handle an array', () => {
        assert.equal(chain([4, 99, 6]).max(), 99);
    });

    it('should handle a set', () => {
        assert.equal(chain(new Set([4, 99, 6])).max(), 99);
    });

    it('should handle an empty iterable', () => {
        assert.equal(chain([]).max(), Number.NEGATIVE_INFINITY);
    });

    it('should work with an iteratee', () => {
        let xs = [
            {value: 4},
            {value: 99},
            {value: 6}
        ];

        assert.equal(chain(xs).max(x => x.value), xs[1]);
    });

    it('should work unchained', () => {
        assert.equal(max([4, 99, 6]), 99);
    });

    it('should pass the correct arguments', () => {
        let xs = [1, 2, 3, 4];
        let thisArg = {};
        let values = [];
        let indices = [];
        let arrays = [];
        let thisArgs = [];

        chain(xs).max(function(y, i, ys) {
            values.push(y);
            indices.push(i);
            arrays.push(ys);
            thisArgs.push(this);
        }, thisArg);

        assert.deepEqual(values, [1, 2, 3, 4]);
        assert.deepEqual(indices, [0, 1, 2, 3]);
        assert.deepEqual(arrays, [xs, xs, xs, xs]);
        assert.deepEqual(thisArgs, [thisArg, thisArg, thisArg, thisArg]);
    });
});
