import {assert} from 'chai';

import chain from '../src/chain';
import range from '../src/range';


describe('range', () => {
    it('should handle a stop', () => {
        let result = chain(range(4)).toArray();

        assert.deepEqual(result, [0, 1, 2, 3]);
    });

    it('should handle a start and stop', () => {
        let result = chain(range(2, 6)).toArray();

        assert.deepEqual(result, [2, 3, 4, 5]);
    });

    it('should handle a start, stop, and step', () => {
        let result = chain(range(2, 10, 2)).toArray();

        assert.deepEqual(result, [2, 4, 6, 8]);
    });

    it('should work chained', () => {
        let result = chain().range(4).toArray();

        assert.deepEqual(result, [0, 1, 2, 3]);
    });

    it('should work unchained', () => {
        let result = range(4);

        assert.deepEqual(Array.from(result), [0, 1, 2, 3]);
    });
});
