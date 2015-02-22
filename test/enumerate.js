import {assert} from 'chai';

import chain from '../src/chain';
import enumerate from '../src/enumerate';


describe('enumerate', () => {
    it('should handle an array', () => {
        let result = chain([1, 2, 3]).enumerate().toArray();

        assert.deepEqual(result, [[0, 1], [1, 2], [2, 3]]);
    });

    it('should handle a string', () => {
        let result = chain('hello').enumerate().toArray();

        assert.deepEqual(
            result,
            [[0, 'h'], [1, 'e'], [2, 'l'], [3, 'l'], [4, 'o']]
        );
    });

    it('should handle a map', () => {
        let result = (
            chain(new Map([[1, 1]]))
            .enumerate()
            .toArray()
        );

        assert.deepEqual(result, [[0, [1, 1]]]);
    });

    it('should handle a set', () => {
        let result = (
            chain(new Set([1, 2, 3]))
            .enumerate()
            .toArray()
        );

        assert.deepEqual(result, [[0, 1], [1, 2], [2, 3]]);
    });

    it('should work unchained', () => {
        let result = enumerate([1, 2, 3]);

        assert.deepEqual(Array.from(result), [[0, 1], [1, 2], [2, 3]]);
    });
});
