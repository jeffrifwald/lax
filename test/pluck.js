import pluck from '../src/pluck';


describe('pluck', () => {
    it('should pluck from an array', () => {
        let xs = [{name: 'John'}, {name: 'Jane'}];
        let result = pluck(xs, 'name');

        assert.deepEqual(Array.from(result), ['John', 'Jane']);
    });
});
