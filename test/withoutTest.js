import {assert} from 'chai';

import chain from '../src/chain';
import without from '../src/without';


describe('without', () => {
    it('should handle an array', () => {
        let xs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, NaN];
        let result = chain(xs).without(2, 3, 4).toArray();

        assert.deepEqual(result, [0, 1, 5, 6, 7, 8, 9, NaN]);
    });

    it('should handle a string', () => {
        let xs = 'Hello World';
        let result = chain(xs).without('l', 'o').toString();

        assert.equal(result, 'He Wrd');
    });

    it('should handle a set', () => {
        let xs = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, NaN]);
        let result = chain(xs).without(5, 6).toArray();

        assert.deepEqual(result, [0, 1, 2, 3, 4, 7, 8, 9, NaN]);
    });

    it('should handle NaN', () => {
        let xs = [0, 1, 2, 3, NaN];
        let result = chain(xs).without(2, NaN).toArray();

        assert.deepEqual(result, [0, 1, 3]);
    });

    it('should work unchained', () => {
        let xs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, NaN];
        let result = without(xs, 2, 3, 4);

        assert.deepEqual(
            Array.from(result),
            [0, 1, 5, 6, 7, 8, 9, NaN]
        );
    });
});
