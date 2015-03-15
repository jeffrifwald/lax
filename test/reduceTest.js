import {assert} from 'chai';

import chain from '../src/chain';
import reduce from '../src/reduce';


describe('reduce', () => {
    it('should handle an array', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).reduce((y, x) => x + y);

        assert.equal(result, 10);
    });

    it('should handle a string', () => {
        let xs = 'abcd';
        let result = chain(xs).reduce((y, x) => y + x);

        assert.equal(result, 'abcd');
    });

    it('should work with an initial value', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).reduce((y, x) => x + y, 1);

        assert.equal(result, 11);
    });

    it('should work with a single value', () => {
        let xs = [1];
        let result = chain(xs).reduce((y, x) => x + y);

        assert.equal(result, 1);
    });

    it('should work with a single value and an initial value', () => {
        let xs = [1];
        let result = chain(xs).reduce((y, x) => x + y, 1);

        assert.equal(result, 2);
    });

    it('should work with no values', () => {
        let xs = [];
        let result = chain(xs).reduce((y, x) => x + y);

        assert.isUndefined(result);
    });

    it('should work with no values and an initial value', () => {
        let xs = [];
        let result = chain(xs).reduce((y, x) => x + y, 1);

        assert.equal(result, 1);
    });

    it('should work without an iteratee', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).reduce();

        assert.equal(result, 1);
    });

    it('should work without an iteratee and an initial value', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).reduce(undefined, 88);

        assert.equal(result, 88);
    });

    it('should work unchained', () => {
        let xs = [1, 2, 3, 4];
        let result = reduce(xs, (y, x) => x + y);

        assert.equal(result, 10);
    });

    it('should pass the correct arguments', () => {
        let xs = [1, 2, 3, 4];
        let thisArg = {};
        let prevs = [];
        let currs = [];
        let indices = [];
        let arrays = [];
        let thisArgs = [];

        chain(xs).reduce(function(y, x, i, ys) {
            prevs.push(y);
            currs.push(x);
            indices.push(i);
            arrays.push(ys);
            thisArgs.push(this);

            return x + y;
        }, undefined, thisArg);

        assert.deepEqual(prevs, [1, 3, 6]);
        assert.deepEqual(currs, [2, 3, 4]);
        assert.deepEqual(indices, [0, 1, 2]);
        assert.deepEqual(arrays, [xs, xs, xs]);
        assert.deepEqual(thisArgs, [thisArg, thisArg, thisArg]);
    });
});
