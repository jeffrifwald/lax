import {assert} from 'chai';

import chain from '../src/chain';
import min from '../src/min';


describe('min', () => {
    it('should handle an array', () => {
        assert.equal(chain([4, 99, 6]).min(), 4);
    });

    it('should handle a set', () => {
        assert.equal(chain(new Set([4, 99, 6])).min(), 4);
    });

    it('should handle an empty iterable', () => {
        assert.equal(chain([]).min(), Number.POSITIVE_INFINITY);
    });

    it('should work with an iteratee', () => {
        let xs = [
            {value: 6},
            {value: 99},
            {value: 4}
        ];

        assert.equal(chain(xs).min(x => x.value), xs[2]);
    });

    it('should work unchained', () => {
        assert.equal(min([4, 99, 6]), 4);
    });

    it('should pass the correct arguments', () => {
        let xs = [1, 2, 3, 4];
        let thisArg = {};
        let values = [];
        let indices = [];
        let arrays = [];
        let thisArgs = [];

        chain(xs).min(function(y, i, ys) {
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
