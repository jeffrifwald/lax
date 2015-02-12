import repeat from '../src/repeat';


describe('repeat', () => {
    it('should repeat a value', () => {
        let result = repeat('hello', 5);

        assert.deepEqual(Array.from(result), ['hello', 'hello', 'hello', 'hello', 'hello']);
    });
});
