import {assert} from 'chai';

import chain from '../src/chain';
import uniq from '../src/uniq';


describe('uniq', () => {
    it('should handle an array', () => {
        let xs = [1, 1, 1, 2, 3, 1, 4, 3, 4];

        assert.deepEqual(chain(xs).uniq().toArray(), [1, 2, 3, 4]);
    });

    // it('should handle a string', () => {
    //     let xs = 'abcd';
    //     let result = [];

    //     chain(xs).uniq(x => result.push(x));

    //     assert.deepEqual(result, ['a', 'b', 'c', 'd']);
    // });

    // it('should handle a map', () => {
    //     let xs = new Map([[1, 1], [2, 2], [3, 3], [4, 4]]);
    //     let result = [];

    //     chain(xs).uniq(x => result.push(x[0]));

    //     assert.deepEqual(result, [1, 2, 3, 4]);
    // });

    // it('should handle a set', () => {
    //     let xs = new Set([1, 2, 3, 4]);
    //     let result = [];

    //     chain(xs).uniq(x => result.push(x));

    //     assert.deepEqual(result, [1, 2, 3, 4]);
    // });

    it('should work unchained', () => {
        let xs = [1, 1, 1, 2, 3, 1, 4, 3, 4];

        assert.deepEqual(Array.from(uniq(xs)), [1, 2, 3, 4]);
    });
});
