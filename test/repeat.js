import {assert} from 'chai';

import chain from '../src/chain';
import repeat from '../src/repeat';


describe('repeat', () => {
    it('should repeat a value', () => {
        let result = chain(repeat('hello', 5)).toArray();

        assert.deepEqual(
            result,
            ['hello', 'hello', 'hello', 'hello', 'hello']
        );
    });

    it('should work chained', () => {
        let result = chain('hello').repeat(5).toArray();

        assert.deepEqual(
            result,
            ['hello', 'hello', 'hello', 'hello', 'hello']
        );
    });

    it('should work unchained', () => {
        let result = repeat('hello', 5);

        assert.deepEqual(
            Array.from(result),
            ['hello', 'hello', 'hello', 'hello', 'hello']
        );
    });
});
