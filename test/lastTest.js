import {assert} from 'chai';

import chain from '../src/chain';
import last from '../src/last';


describe('last', () => {
    it('should handle an array', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).last();

        assert.equal(result, 4);
    });

    it('should handle a string', () => {
        let xs = 'abcdefg';
        let result = chain(xs).last();

        assert.deepEqual(result, 'g');
    });

    it('should handle a set', () => {
        let xs = new Set([1, 2, 3, 4]);
        let result = chain(xs).last();

        assert.equal(result, 4);
    });

    it('should handle a map', () => {
        let xs = new Map([[1, 1], [2, 2], [3, 3], [4, 4]]);
        let result = chain(xs).last();

        assert.deepEqual(result, [4, 4]);
    });

    it('should handle one value', () => {
        let xs = [1];
        let result = chain(xs).last();

        assert.equal(result, 1);
    });

    it('should handle no values', () => {
        let xs = [];
        let result = chain(xs).last();

        assert.isUndefined(result);
    });

    it('should work unchained', () => {
        let xs = [1, 2, 3, 4];
        let result = last(xs);

        assert.deepEqual(result, 4);
    });
});
