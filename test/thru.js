import {assert} from 'chai';

import chain from '../src/chain';
import thru from '../src/thru';


describe('thru', () => {
    it('should be lazy', () => {
        let xs = [1, 2, 3, 4];
        let callCount = 0;
        let fn = (x) => {
            callCount += 1;

            return x * x;
        };
        let result = chain(xs).thru(fn);

        assert.equal(callCount, 0);
        assert.deepEqual(result.toArray(), [1, 4, 9, 16]);
        assert.equal(callCount, 4);
    });

    it('should work unchained', () => {
        let xs = [1, 2, 3, 4];
        let callCount = 0;
        let fn = (x) => {
            callCount += 1;

            return x * x;
        };
        let result = thru(xs, fn);

        assert.equal(callCount, 0);
        assert.deepEqual(Array.from(result), [1, 4, 9, 16]);
        assert.equal(callCount, 4);
    });

    it('should pass the correct arguments', () => {
        let xs = [1, 2, 3, 4];
        let thisArg = {};
        let values = [];
        let indices = [];
        let arrays = [];
        let thisArgs = [];
        let result = chain(xs).thru(function(x, i, xs) {
            values.push(x);
            indices.push(i);
            arrays.push(xs);
            thisArgs.push(this);

            return x * x;
        }, thisArg);

        assert.deepEqual(values, []);
        assert.deepEqual(indices, []);
        assert.deepEqual(arrays, []);
        assert.deepEqual(thisArgs, []);
        assert.deepEqual(result.toArray(), [1, 4, 9, 16]);
        assert.deepEqual(values, [1, 2, 3, 4]);
        assert.deepEqual(indices, [0, 1, 2, 3]);
        assert.deepEqual(arrays, [xs, xs, xs, xs]);
        assert.deepEqual(thisArgs, [thisArg, thisArg, thisArg, thisArg]);
    });
});
