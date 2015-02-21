import {assert} from 'chai';

import chain from '../src/chain';
import where from '../src/where';


describe('where', () => {
    it('should handle arrays', () => {
        let xs = [[1], [2], [2], [4]];
        let result = chain(xs).where({0: 2}).toArray();

        assert.deepEqual(result, [[2], [2]]);
    });

    it('should handle strings', () => {
        let xs = ['sad', 'good', 'mad'];
        let result = chain(xs).where({2: 'd'}).toArray();

        assert.deepEqual(result, ['sad', 'mad']);
    });

    it('should handle objects', () => {
        let xs = [
            {age: 30, name: 'Jane'},
            {age: 30, name: 'John'},
            {age: 40, name: 'John'}
        ];
        let result = chain(xs).where({age: 30}).toArray();

        assert.deepEqual(result, [
            {age: 30, name: 'Jane'},
            {age: 30, name: 'John'}
        ]);
    });

    it('should handle not found', () => {
        let xs = [
            {age: 30, name: 'Jane'},
            {age: 30, name: 'John'},
            {age: 40, name: 'John'}
        ];
        let result = chain(xs).where({age: 50}).toArray();

        assert.deepEqual(result, []);
    });

    it('should work unchained', () => {
        let xs = [[1], [2], [2], [4]];
        let result = where(xs, {0: 2});

        assert.deepEqual(Array.from(result), [[2], [2]]);
    });
});
