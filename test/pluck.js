import pluck from '../src/pluck';


describe('pluck', () => {
    it('should handle an array', () => {
        let xs = [{name: 'John'}, {name: 'Jane'}];
        let result = pluck(xs, 'name');

        assert.deepEqual(Array.from(result), ['John', 'Jane']);
    });

    it('should handle a map', () => {
        let xs = new Map([['key1', 'value1'], ['key2', 'value2']]);
        let result = pluck(xs, 0);

        assert.deepEqual(Array.from(result), ['key1', 'key2']);
    });

    it('should handle a set', () => {
        let xs = new Set([{name: 'John'}, {name: 'Jane'}]);
        let result = pluck(xs, 'name');

        assert.deepEqual(Array.from(result), ['John', 'Jane']);
    });
});
