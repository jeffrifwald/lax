import none from '../src/none';


describe('none', () => {
    it('should handle a true case', () => {
        let xs = [1, 2, 3, 4];
        let result = none(xs, x => x > 5);

        assert.isTrue(result);
    });

    it('should handle a false case', () => {
        let xs = [1, 2, 3, 4];
        let result = none(xs, x => x > 3);

        assert.isFalse(result);
    });
});
