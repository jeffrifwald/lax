import some from '../src/some';


describe('some', () => {
    it('should handle a true case', () => {
        let xs = [1, 2, 3, 4];
        let result = some(xs, x => x === 3);

        assert.isTrue(result);
    });

    it('should handle a false case', () => {
        let xs = [1, 2, 3, 4];
        let result = some(xs, x => x > 4);

        assert.isFalse(result);
    });
});
