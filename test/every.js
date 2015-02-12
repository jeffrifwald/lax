import every from '../src/every';


describe('every', () => {
    it('should handle a true case', () => {
        let xs = [1, 2, 3, 4];
        let result = every(xs, x => x < 5);

        assert.isTrue(result);
    });

    it('should handle a false case', () => {
        let xs = [1, 2, 3, 4];
        let result = every(xs, x => x < 4);

        assert.isFalse(result);
    });
});
