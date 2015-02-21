import chain from '../src/chain';
import take from '../src/take';


describe('take', () => {
    it('should handle an array', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).take(2).toArray();

        assert.deepEqual(result, [1, 2]);
    });

    it('should handle a string', () => {
        let xs = 'abcdefg';
        let result = chain(xs).take(3).toString();

        assert.equal(result, 'abc');
    });

    it('should handle a set', () => {
        let xs = new Set([1, 2, 3, 4]);
        let result = chain(xs).take(1).toArray();

        assert.deepEqual(result, [1]);
    });

    it('should handle a map', () => {
        let xs = new Map([[1, 1], [2, 2], [3,3], [4, 4]]);
        let result = chain(xs).take(2).toArray();

        assert.deepEqual(result, [[1, 1], [2, 2]]);
    });

    it('should work unchained', () => {
        let xs = [1, 2, 3, 4];
        let result = take(xs, 2);

        assert.deepEqual(Array.from(result), [1, 2]);
    });
});
