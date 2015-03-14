import {assert} from 'chai';

import identity from '../src/identity';
import chain from '../src/chain';


describe('identity', () => {
    it('should work chained', () => {
        let xs = [1, 2, 3, 4];
        let result = chain().identity(xs);

        assert.equal(result, xs);
    });

    it('should work unchained', () => {
        let xs = [1, 2, 3, 4];
        let result = identity(xs);

        assert.equal(result, xs);
    });
});
