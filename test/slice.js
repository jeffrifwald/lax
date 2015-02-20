import slice from '../src/slice';


describe('slice', () => {
    it('should handle an array', () => {
        let xs = [1, 2, 3, 4];
        let result = slice(xs, 2);

        assert.deepEqual(Array.from(result), [3, 4]);
    });

    it('should handle a string', () => {
        let xs = 'abcdefg';
        let result = slice(xs, 3);

        assert.deepEqual(Array.from(result), ['d', 'e', 'f', 'g']);
    });

    it('should handle a map', () => {
        let xs = new Map([[1, 1], [2, 2], [3, 3], [4, 4]]);
        let result = slice(xs, 2);

        assert.deepEqual(Array.from(result), [[3, 3], [4, 4]]);
    });

    it('should handle a set', () => {
        let xs = new Set([1, 1, 2, 3, 4]);
        let result = slice(xs, 2);

        assert.deepEqual(Array.from(result), [3, 4]);
    });

    it('should handle a start', () => {
        let xs = [1, 2, 3, 4];
        let result = slice(xs, 1);

        assert.deepEqual(Array.from(result), [2, 3, 4]);
    });

    it('should handle a start and stop', () => {
        let xs = [1, 2, 3, 4];
        let result = slice(xs, 2, 3);

        assert.deepEqual(Array.from(result), [3]);
    });
});
