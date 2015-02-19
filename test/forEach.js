import forEach from '../src/forEach';


describe('forEach', () => {
    it('should handle an array', () => {
        let xs = [1, 2, 3, 4];
        let result = [];

        forEach(xs, x => result.push(x));

        assert.deepEqual(result, [1, 2, 3, 4]);
    });

    it('should handle a string', () => {
        let xs = 'abcd';
        let result = [];

        forEach(xs, x => result.push(x));

        assert.deepEqual(result, ['a', 'b', 'c', 'd']);
    });

    it('should handle a map', () => {
        let xs = new Map([[1, 1], [2, 2], [3, 3], [4, 4]]);
        let result = [];

        forEach(xs, x => result.push(x[0]));

        assert.deepEqual(result, [1, 2, 3, 4]);

    });

    it('should handle a set', () => {
        let xs = new Set([1, 2, 3, 4]);
        let result = [];

        forEach(xs, x => result.push(x));

        assert.deepEqual(result, [1, 2, 3, 4]);
    });

    it('should pass the correct arguments', () => {
        let xs = [1, 2, 3, 4];
        let values = [];
        let indices = [];

        forEach(xs, (x, i) => {
            values.push(x);
            indices.push(i);
        });

        assert.deepEqual(values, [1, 2, 3, 4]);
        assert.deepEqual(indices, [0, 1, 2, 3]);
    });
});
