import {assert} from 'chai';

import chain from '../src/chain';
import unique from '../src/unique';


describe('unique', () => {
    it('should handle an array', () => {
        let xs = [1, 1, 1, 2, 3, 1, 4, 3, 4];

        assert.deepEqual(chain(xs).unique().toArray(), [1, 2, 3, 4]);
    });

    it('should handle a string', () => {
        let xs = 'hello world';

        assert.deepEqual(chain(xs).unique().toString(), 'helo wrd');
    });

    it('should work unchained', () => {
        let xs = [1, 1, 1, 2, 3, 1, 4, 3, 4];

        assert.deepEqual(Array.from(unique(xs)), [1, 2, 3, 4]);
    });
});
