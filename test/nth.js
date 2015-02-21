import chain from '../src/chain';
import nth from '../src/nth';


describe('nth', () => {
    it('should handle an array', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).nth(2);

        assert.equal(result, 3);
    });

    it('should handle a string', () => {
        let xs = 'abcd';
        let result = chain(xs).nth(2);

        assert.equal(result, 'c');
    });

    it('should handle a set', () => {
        let xs = new Set([1, 1, 2, 3, 4]);
        let result = chain(xs).nth(2);

        assert.equal(result, 3);
    });

    it('should handle a map', () => {
        let xs = new Map([[1, 1], [2, 2]]);
        let result = chain(xs).nth(0);

        assert.deepEqual(result, [1, 1]);
    });

    it('should work unchained', () => {
        let xs = [1, 2, 3, 4];
        let result = nth(xs, 2);

        assert.equal(result, 3);
    });
});
