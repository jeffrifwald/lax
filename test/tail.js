import {assert} from 'chai';

import chain from '../src/chain';
import tail from '../src/tail';


describe('tail', () => {
    it('should handle an array', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).tail().toArray();

        assert.deepEqual(result, [2, 3, 4]);
    });

    it('should handle a string', () => {
        let xs = 'hello';
        let result = chain(xs).tail().toString();

        assert.equal(result, 'ello');
    });

    it('should handle a map', () => {
        let xs = new Map([[1, 1], [2, 2]]);
        let result = chain(xs).tail().toArray();

        assert.deepEqual(result, [[2, 2]]);
    });

    it('should handle a set', () => {
        let xs = new Set([1, 1, 2, 2, 3, 4]);
        let result = chain(xs).tail().toArray();

        assert.deepEqual(result, [2, 3, 4]);
    });

    it('should handle a count', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).tail(2).toArray();

        assert.deepEqual(result, [3, 4]);
    });

    it('should handle a 0 count', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).tail(0).toArray();

        assert.deepEqual(result, [1, 2, 3, 4]);
    });

    it('should handle a too large count', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).tail(5).toArray();

        assert.deepEqual(result, []);
    });

    it('should work unchained', () => {
        let xs = [1, 2, 3, 4];
        let result = tail(xs);

        assert.deepEqual(Array.from(result), [2, 3, 4]);
    });
});
