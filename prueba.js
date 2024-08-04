const { sum } = require('./app.js');

test ("adds 7 + 17 to equal 24", ()=> {
    let total = sum(7,17);
    expect(total).toBe(24);
})