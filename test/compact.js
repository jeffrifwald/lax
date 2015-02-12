import compact from '../src/compact';


describe('compact', () => {
    it('should compact an array', () => {
        let xs = [0, 1, null, undefined, 2, '', 3, false];
        let result = compact(xs);

        assert.deepEqual(Array.from(result), [1, 2, 3]);
    });

    it('should compact a set', () => {
        let xs = new Set([0, 3, null, undefined, 2, '', 1, false]);
        let result = compact(xs);

        assert.deepEqual(Array.from(result), [3, 2, 1]);
    });
});
