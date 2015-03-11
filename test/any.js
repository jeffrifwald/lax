import {assert} from 'chai';

import any from '../src/any';
import chain from '../src/chain';


describe('any', () => {
    it('should handle a true case', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).any(x => x === 3);

        assert.isTrue(result);
    });

    it('should handle a false case', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).any(x => x > 4);

        assert.isFalse(result);
    });

    it('should work unchained', () => {
        let xs = [1, 2, 3, 4];
        let result = any(xs, x => x === 3);

        assert.isTrue(result);
    });

    it('should exit early', () => {
        let xs = [1, 2, 3, 4];
        let callCount = 0;
        let result = chain(xs).any(x => {
            callCount += 1;

            return x === 2;
        });

        assert.isTrue(result);
        assert.equal(callCount, 2);
    });

    it('should pass the correct arguments', () => {
        let xs = [1, 2, 3, 4];
        let thisArg = {};
        let values = [];
        let indices = [];
        let arrays = [];
        let thisArgs = [];
        let result = chain(xs).any(function(y, i, ys) {
            values.push(y);
            indices.push(i);
            arrays.push(ys);
            thisArgs.push(this);

            return y > 3;
        }, thisArg);

        assert.isTrue(result);
        assert.deepEqual(values, [1, 2, 3, 4]);
        assert.deepEqual(indices, [0, 1, 2, 3]);
        assert.deepEqual(arrays, [xs, xs, xs, xs]);
        assert.deepEqual(thisArgs, [thisArg, thisArg, thisArg, thisArg]);
    });
});
