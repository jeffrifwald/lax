import map from '../src/map';


describe('map', () => {
    it('should map an array', () => {
        let xs = [1, 2, 3, 4];
        let result = map(xs, x => x * x);

        assert.deepEqual(Array.from(result), [1, 4, 9, 16]);
    });

    it('should map a string', () => {
        let xs = 'abcd';
        let result = map(xs, x => x + 'z');

        assert.deepEqual(Array.from(result), ['az', 'bz', 'cz', 'dz']);
    });

    it('should map a map', () => {
        let xs = new Map([[1, 1], [2, 2], [3,3], [4, 4]]);
        let result = map(xs, x => x[0] * x[0]);

        assert.deepEqual(Array.from(result), [1, 4, 9, 16]);
    });

    it('should map a set', () => {
        let xs = new Set([1, 2, 3, 4]);
        let result = map(xs, x => x * x);

        assert.deepEqual(Array.from(result), [1, 4, 9, 16]);
    });

    it('should pass the correct arguments', () => {
        let xs = [1, 2, 3, 4];
        let values = [];
        let indices = [];
        let arrays = [];
        let result = map(xs, (x, i, xs) => {
            values.push(x);
            indices.push(i);
            arrays.push(xs);

            return true;
        });

        assert.deepEqual(Array.from(result), [true, true, true, true]);
        assert.deepEqual(values, [1, 2, 3, 4]);
        assert.deepEqual(indices, [0, 1, 2, 3]);
        assert.deepEqual(arrays, [xs, xs, xs, xs]);
    });
});
