import {assert} from 'chai';

import chain from '../src/chain';
import pluck from '../src/pluck';


describe('pluck', () => {
    it('should handle an array', () => {
        let xs = [{name: 'John'}, {name: 'Jane'}];
        let result = chain(xs).pluck('name').toArray();

        assert.deepEqual(result, ['John', 'Jane']);
    });

    it('should handle a string', () => {
        let xs = ['John', 'Jane'];
        let result = chain(xs).pluck(1).toArray();

        assert.deepEqual(result, ['o', 'a']);
    });

    it('should handle a map', () => {
        let xs = new Map([['key1', 'value1'], ['key2', 'value2']]);
        let result = chain(xs).pluck(0).toArray();

        assert.deepEqual(result, ['key1', 'key2']);
    });

    it('should handle a set', () => {
        let xs = new Set([{name: 'John'}, {name: 'Jane'}]);
        let result = chain(xs).pluck('name').toArray();

        assert.deepEqual(result, ['John', 'Jane']);
    });

    it('should work unchained', () => {
        let xs = [{name: 'John'}, {name: 'Jane'}];
        let result = pluck(xs, 'name');

        assert.deepEqual(Array.from(result), ['John', 'Jane']);
    });
});
