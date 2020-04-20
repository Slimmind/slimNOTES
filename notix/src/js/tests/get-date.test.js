const getDate = require('../helpers/get-date.js');

test('should be defined', () => {
    expect(getDate()).toBeDefined();
});

test('should not be null', () => {
    expect(getDate()).not.toBeNull();
});

test('should return current date in format yyyy-mm-dd', () => {
    expect(getDate()).toMatch(/([2]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/);
});

test('should NOT return date in format yyyy-dd-mm', () => {
    expect(getDate()).not.toMatch(/([2]\d{3}-(0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2]))/);
});

test('should NOT return date in format dd-mm-yyyy', () => {
    expect(getDate()).not.toMatch(/((0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-[2]\d{3})/);
});
