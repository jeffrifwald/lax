import {assert} from 'chai';

import chain from '../src/chain';
import rest from '../src/rest';


describe('rest', () => {
    it('should handle an array', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).rest().toArray();

        assert.deepEqual(result, [2, 3, 4]);
    });

    it('should handle a string', () => {
        let xs = 'hello';
        let result = chain(xs).rest().toString();

        assert.equal(result, 'ello');
    });

    it('should handle a map', () => {
        let xs = new Map([[1, 1], [2, 2]]);
        let result = chain(xs).rest().toArray();

        assert.deepEqual(result, [[2, 2]]);
    });

    it('should handle a set', () => {
        let xs = new Set([1, 1, 2, 2, 3, 4]);
        let result = chain(xs).rest().toArray();

        assert.deepEqual(result, [2, 3, 4]);
    });

    it('should handle a count', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).rest(2).toArray();

        assert.deepEqual(result, [3, 4]);
    });

    it('should handle a 0 count', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).rest(0).toArray();

        assert.deepEqual(result, [1, 2, 3, 4]);
    });

    it('should handle a too large count', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).rest(5).toArray();

        assert.deepEqual(result, []);
    });

    it('should work unchained', () => {
        let xs = [1, 2, 3, 4];
        let result = rest(xs);

        assert.deepEqual(Array.from(result), [2, 3, 4]);
    });
});
