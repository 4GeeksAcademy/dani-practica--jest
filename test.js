const { fromYenToPound, fromEuroToDollar, fromDollarToYen } = require('./app.js');

test("One euro should be 1.07 dollars", function() {
     expect(fromEuroToDollar(3.5)).toBe(3.745); 
})

test("One dollar should be 146.26 yens", function() {
     expect(fromDollarToYen(1)).toBe(146.26); 
})

test("One yen should be 0.0056 pounds", function() {
    expect(fromDollarToYen(1)).toBe(146.26); 
})