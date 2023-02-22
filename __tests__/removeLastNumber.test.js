const removeLastNumber = require('../removeLastNumber');

describe('removeLastNumber', () => {
	
    test('returns an array', () => {

        expect(removeLastNumber([])).toEqual([]);
    })

    test('returns a new array', () => {
        const obj = [1, 2];
        expect(removeLastNumber(obj)).not.toBe(obj);
    })


      
        test('returns a new array of numbers with last number removed', () => {

        expect(removeLastNumber([1, 2, 3, 4])).toEqual([1, 2, 3]);
     })

})
    