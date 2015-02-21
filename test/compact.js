import chain from '../src/chain';
import compact from '../src/compact';


describe('compact', () => {
    it('should handle an array', () => {
        let xs = [0, 1, null, undefined, 2, '', 3, false];
        let result = chain(xs).compact().toArray();

        assert.deepEqual(result, [1, 2, 3]);
    });

    it('should handle a set', () => {
        let xs = new Set([0, 3, null, undefined, 2, '', 1, false]);
        let result = chain(xs).compact().toArray();

        assert.deepEqual(result, [3, 2, 1]);
    });

    it('should should work unchained', () => {
        let xs = [0, 1, null, undefined, 2, '', 3, false];
        let result = compact(xs);

        assert.deepEqual(Array.from(result), [1, 2, 3]);
    });
});
