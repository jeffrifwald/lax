import {assert} from 'chai';

import chain from '../src/chain';
import tap from '../src/tap';


describe('tap', () => {
    it('should be lazy', () => {
        let xs = [1, 2, 3, 4];
        let callCount = 0;
        let fn = () => callCount += 1;
        let result = chain(xs).tap(fn);

        assert.equal(callCount, 0);
        result.toArray();
        assert.equal(callCount, 4);
    });

    it('should work unchained', () => {
        let xs = [1, 2, 3, 4];
        let callCount = 0;
        let fn = () => callCount += 1;
        let result = tap(xs, fn);

        assert.equal(callCount, 0);
        Array.from(result);
        assert.equal(callCount, 4);
    });

    it('should pass the correct arguments', () => {
        let xs = [1, 2, 3, 4];
        let thisArg = {};
        let values = [];
        let indices = [];
        let arrays = [];
        let thisArgs = [];
        let result = chain(xs).tap(function(y, i, ys) {
            values.push(y);
            indices.push(i);
            arrays.push(ys);
            thisArgs.push(this);
        }, thisArg);

        assert.deepEqual(values, []);
        assert.deepEqual(indices, []);
        assert.deepEqual(arrays, []);
        assert.deepEqual(thisArgs, []);
        result.toArray();
        assert.deepEqual(values, [1, 2, 3, 4]);
        assert.deepEqual(indices, [0, 1, 2, 3]);
        assert.deepEqual(arrays, [xs, xs, xs, xs]);
        assert.deepEqual(thisArgs, [thisArg, thisArg, thisArg, thisArg]);
    });
});
