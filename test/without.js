import without from '../src/without';


describe('without', () => {
    it('should handle an array', () => {
        let xs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, NaN];
        let result = without(xs, 2, 3, 4);

        assert.deepEqual(
            Array.from(result),
            [0, 1, 5, 6, 7, 8, 9, NaN]
        );
    });

    it('should handle a string', () => {
        let xs = 'Hello World';
        let result = without(xs, 'l', 'o');

        assert.deepEqual(
            Array.from(result),
            ['H', 'e', ' ', 'W', 'r', 'd']
        );
    });

    it('should handle a set', () => {
        let xs = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, NaN]);
        let result = without(xs, 5, 6);

        assert.deepEqual(
            Array.from(result),
            [0, 1, 2, 3, 4, 7, 8, 9, NaN]
        );
    });

    it('should handle NaN', () => {
        let xs = [0, 1, 2, 3, NaN];
        let result = without(xs, 2, NaN);

        assert.deepEqual(
            Array.from(result),
            [0, 1, 3]
        );
    });
});
