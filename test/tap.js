import tap from '../src/tap';


describe('tap', () => {
    it('should be lazy', () => {
        let xs = [1, 2, 3, 4];
        let callCount = 0;
        let fn = () => callCount += 1;
        let result = tap(xs, fn);

        assert.equal(callCount, 0);
        Array.from(result);
        assert.equal(callCount, 4);
    });

    it('should pass the correct arguments', () => {
        let xs = [1, 2, 3, 4];
        let thisArg = {};
        let values = [];
        let indices = [];
        let arrays = [];
        let thisArgs = [];
        let result = tap(xs, function(x, i, xs) {
            values.push(x);
            indices.push(i);
            arrays.push(xs);
            thisArgs.push(this);
        }, thisArg);

        Array.from(result);
        assert.deepEqual(values, [1, 2, 3, 4]);
        assert.deepEqual(indices, [0, 1, 2, 3]);
        assert.deepEqual(arrays, [xs, xs, xs, xs]);
        assert.deepEqual(thisArgs, [thisArg, thisArg, thisArg, thisArg]);
    });
});
