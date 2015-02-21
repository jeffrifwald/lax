import {assert} from 'chai';

import chain from '../src/chain';
import head from '../src/head';


describe('head', () => {
    it('should handle an array', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).head();

        assert.equal(result, 1);
    });

    it('should handle a string', () => {
        let xs = 'abcd';
        let result = chain(xs).head();

        assert.equal(result, 'a');
    });

    it('should handle a set', () => {
        let xs = new Set([1, 1, 2, 3, 4]);
        let result = chain(xs).head();

        assert.equal(result, 1);
    });

    it('should handle a map', () => {
        let xs = new Map([[1, 1], [2, 2]]);
        let result = chain(xs).head();

        assert.deepEqual(result, [1, 1]);
    });

    it('should work unchained', () => {
        let xs = [1, 2, 3, 4];
        let result = head(xs);

        assert.equal(result, 1);
    });
});
