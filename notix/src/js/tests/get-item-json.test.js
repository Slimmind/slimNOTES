const getItemJSON = require('../helpers/get-item-json.js');

test('should be defined', () => {
    expect(getItemJSON()).toBeDefined();
});