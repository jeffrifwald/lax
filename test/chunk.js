import chunk from '../src/chunk';


describe('chunk', () => {
    it('should chunk an array', () => {
        let xs = [1, 2, 3, 4, 5, 6, 7, 8, 9];
        let result = chunk(xs, 2);

        assert.deepEqual(
            Array.from(result),
            [[1, 2], [3, 4], [5, 6], [7, 8], [9]]
        );
    });

    it('should chunk a string', () => {
        let xs = 'abcdefgh';
        let result = chunk(xs, 3);

        assert.deepEqual(
            Array.from(result),
            [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h']]
        );
    });

    it('should chunk a map', () => {
        let xs = new Map([[1, 1], [2, 2], [3, 3], [4, 4]]);
        let result = chunk(xs, 2);

        assert.deepEqual(
            Array.from(result),
            [[[1, 1], [2, 2]], [[3, 3], [4, 4]]]
        );
    });

    it('should chunk a set', () => {
        let xs = new Set([1, 2, 3, 4]);
        let result = chunk(xs, 4);

        assert.deepEqual(Array.from(result), [[1, 2, 3, 4]]);
    });

    it('should handle a too big chunk', () => {
        let xs = [1, 2, 3, 4];
        let result = chunk(xs, 10);

        assert.deepEqual(Array.from(result), [[1, 2, 3, 4]]);
    });

    it('should handle a zero chunk', () => {
        let xs = [1, 2, 3, 4];
        let result = chunk(xs, 0);

        assert.deepEqual(Array.from(result), [[1], [2], [3], [4]]);
    });

    it('should handle a negative chunk', () => {
        let xs = [1, 2, 3, 4];
        let result = chunk(xs, -1);

        assert.deepEqual(Array.from(result), [[1], [2], [3], [4]]);
    });
});
