import {assert} from 'chai';

import chain from '../src/chain';
import findWhere from '../src/findWhere';


describe('findWhere', () => {
    it('should handle arrays', () => {
        let xs = [[1], [2], [3], [4]];
        let result = chain(xs).findWhere({0: 3});

        assert.deepEqual(result, [3]);
    });

    it('should handle strings', () => {
        let xs = ['abc', 'def', 'ghi'];
        let result = chain(xs).findWhere({2: 'f'});

        assert.equal(result, 'def');
    });

    it('should handle objects', () => {
        let xs = [
            {age: 30, name: 'Jane'},
            {age: 30, name: 'John'},
            {age: 40, name: 'John'}
        ];
        let result = chain(xs).findWhere({age: 30, name: 'John'});

        assert.deepEqual(result, {age: 30, name: 'John'});
    });

    it('should handle not found', () => {
        let xs = [
            {age: 30, name: 'Jane'},
            {age: 30, name: 'John'},
            {age: 40, name: 'John'}
        ];
        let result = chain(xs).findWhere({age: 50});

        assert.isUndefined(result);
    });

    it('should work unchained', () => {
        let xs = [[1], [2], [3], [4]];
        let result = findWhere(xs, {0: 3});

        assert.deepEqual(result, [3]);
    });
});
