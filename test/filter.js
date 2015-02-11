import filter from '../src/filter';


describe('filter', () => {
    it('should filter an array', () => {
        let xs = [1, 2, 3, 4];
        let result = filter(xs, x => x > 2);

        assert.deepEqual(Array.from(result), [3, 4]);
    });

    it('should filter a string', () => {
        let xs = 'abcd';
        let result = filter(xs, x => x === 'c');

        assert.deepEqual(Array.from(result), ['c'])

    });

    it('should filter a Map', () => {
        let xs = new Map([[1, 1], [2, 2], [3,3], [4, 4]]);
        let result = filter(xs, x => x[0] > 2);

        assert.deepEqual(Array.from(result), [[3, 3], [4, 4]]);
    });

    it('should filter a Set', () => {
        let xs = new Set([1, 2, 3, 4]);
        let result = filter(xs, x => x > 2);

        assert.deepEqual(Array.from(result), [3, 4]);
    });
});
