import {assert} from 'chai';

import chain from '../src/chain';
import sample from '../src/sample';


describe('sample', () => {
    it('should handle an array', () => {
        let xs = [11, 22, 33, 44, 55];
        let result = chain(xs).sample(2).toArray();

        assert.equal(result.length, 2);
        assert.include(xs, result[0]);
        assert.include(xs, result[1]);
    });

    it('should handle a string', () => {
        let xs = 'abcdef';
        let result = chain(xs).sample(3).toArray();

        assert.equal(result.length, 3);
        assert.include(xs, result[0]);
        assert.include(xs, result[1]);
        assert.include(xs, result[2]);
    });

    it('should work without n', () => {
        let xs = [11, 22, 33, 44, 55];
        let result = chain(xs).sample().toArray();

        assert.equal(result.length, 1);
        assert.include(xs, result[0]);
    });

    it('should work with n larger than size', () => {
        let xs = [11, 22, 33, 44, 55];
        let result = chain(xs).sample(8).toArray();

        assert.equal(result.length, 8);
        assert.include(xs, result[0]);
        assert.include(xs, result[1]);
        assert.include(xs, result[2]);
        assert.include(xs, result[3]);
        assert.include(xs, result[4]);
        assert.include(xs, result[5]);
        assert.include(xs, result[6]);
        assert.include(xs, result[7]);
    });

    it('should work unchained', () => {
        let xs = [11, 22, 33, 44, 55];
        let result = Array.from(sample(xs, 2));

        assert.equal(result.length, 2);
        assert.include(xs, result[0]);
        assert.include(xs, result[1]);
    });
});
