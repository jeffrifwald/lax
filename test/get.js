import {assert} from 'chai';

import chain from '../src/chain';
import get from '../src/get';


describe('get', () => {
    it('should handle an array', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).get(0);

        assert.equal(result, 1);
    });

    it('should handle a string', () => {
        let xs = 'abcd';
        let result = chain(xs).get(2);

        assert.equal(result, 'c');
    });

    it('should handle a set', () => {
        let xs = new Set([1, 1, 2, 3, 4]);
        let result = chain(xs).get(3);

        assert.equal(result, 4);
    });

    it('should handle a map', () => {
        let xs = new Map([[1, 1], [2, 2]]);
        let result = chain(xs).get(0);

        assert.deepEqual(result, [1, 1]);
    });

    it('should handle no arguments', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).get();

        assert.equal(result, 1);
    });

    it('should work unchained', () => {
        let xs = [1, 2, 3, 4];
        let result = get(xs, 0);

        assert.equal(result, 1);
    });
});
