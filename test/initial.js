import initial from '../src/initial';


describe('initial', () => {
    it('should handle an array', () => {
        let xs = [1, 2, 3, 4];
        let result = initial(xs);

        assert.deepEqual(Array.from(result), [1, 2, 3]);
    });

    it('should handle a string', () => {
        let xs = 'ab';
        let result = initial(xs, 3);

        assert.deepEqual(Array.from(result), ['a']);
    });

    it('should handle a set', () => {
        let xs = new Set([1, 2, 3, 4]);
        let result = initial(xs, 1);

        assert.deepEqual(Array.from(result), [1, 2, 3]);
    });

    it('should handle a map', () => {
        let xs = new Map([[1, 1], [2, 2], [3,3], [4, 4]]);
        let result = initial(xs, 2);

        assert.deepEqual(Array.from(result), [[1, 1], [2, 2], [3, 3]]);
    });

    it('should handle one value', () => {
        let xs = [1];
        let result = initial(xs);

        assert.deepEqual(Array.from(result), []);
    });

    it('should handle no values', () => {
        let xs = [];
        let result = initial(xs);

        assert.deepEqual(Array.from(result), []);
    });
});
