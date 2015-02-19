import slice from '../src/slice';


describe('slice', () => {
    it('should handle a stop', () => {
        let xs = 'ABCDEFG';
        let result = slice(xs, 2);

        assert.deepEqual(Array.from(result), ['A', 'B']);
    });

    it('should handle a start and stop', () => {
        let xs = 'ABCDEFG';
        let result = slice(xs, 2, 4);

        assert.deepEqual(Array.from(result), ['C', 'D']);
    });

    it('should handle a start and null stop', () => {
        let xs = 'ABCDEFG';
        let result = slice(xs, 2, null);

        assert.deepEqual(Array.from(result), ['C', 'D', 'E', 'F', 'G']);
    });

    it('should handle a start, stop, and step', () => {
        let xs = 'ABCDEFG';
        let result = slice(xs, 2, 8, 2);

        assert.deepEqual(Array.from(result), ['C', 'E', 'G']);
    });

    it('should handle an array', () => {
        let xs = [1, 2, 3, 4, 5, 6, 7, 8];
        let result = slice(xs, 2);

        assert.deepEqual(Array.from(result), [1, 2]);
    });
});
