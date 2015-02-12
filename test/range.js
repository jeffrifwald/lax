import range from '../src/range';


describe('range', () => {
    it('should handle a stop', () => {
        let result = range(4);

        assert.deepEqual(Array.from(result), [0, 1, 2, 3]);
    });

    it('should handle a start and stop', () => {
        let result = range(2, 6);

        assert.deepEqual(Array.from(result), [2, 3, 4, 5]);
    });

    it('should handle a start, stop, and step', () => {
        let result = range(2, 10, 2);

        assert.deepEqual(Array.from(result), [2, 4, 6, 8]);
    });
});
