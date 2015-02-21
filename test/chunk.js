import chain from '../src/chain';
import chunk from '../src/chunk';


describe('chunk', () => {
    it('should handle an array', () => {
        let xs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let result = chain(xs).chunk(2).toArray();

        assert.deepEqual(
            result,
            [[1, 2], [3, 4], [5, 6], [7, 8], [9]]
        );
    });

    it('should handle a string', () => {
        let xs = 'abcdefgh';
        let result = chain(xs).chunk(3).toArray();

        assert.deepEqual(
            result,
            [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h']]
        );
    });

    it('should handle a map', () => {
        let xs = new Map([[1, 1], [2, 2], [3, 3], [4, 4]]);
        let result = chain(xs).chunk(2).toArray();

        assert.deepEqual(
            result,
            [[[1, 1], [2, 2]], [[3, 3], [4, 4]]]
        );
    });

    it('should handle a set', () => {
        let xs = new Set([1, 2, 3, 4]);
        let result = chain(xs).chunk(2).toArray();

        assert.deepEqual(result, [[1, 2], [3, 4]]);
    });

    it('should handle a too big chunk', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).chunk(10).toArray();

        assert.deepEqual(result, [[1, 2, 3, 4]]);
    });

    it('should handle a zero chunk', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).chunk(0).toArray();

        assert.deepEqual(result, [[1], [2], [3], [4]]);
    });

    it('should handle a negative chunk', () => {
        let xs = [1, 2, 3, 4];
        let result = chain(xs).chunk(-1).toArray();

        assert.deepEqual(result, [[1], [2], [3], [4]]);
    });

    it('should work unchained', () => {
        let xs = [1, 2, 3, 4];
        let result = chunk(xs, 2);

        assert.deepEqual(Array.from(result), [[1, 2], [3, 4]]);
    });
});
