const rewire = require('rewire');
const fs = require('fs');
const path = require('path');
global.console.log = console.log = jest.fn((text) => null);
const fileContent = fs.readFileSync(path.resolve(__dirname, './app.js'), 'utf8');
const renderPerson = rewire('./app.js').__get__('renderPerson');

it("The function 'renderPerson' must exist" , function () {
    expect(renderPerson).toBeTruthy();
});

it("The function 'renderPerson' should return something" , function () {
    expect(renderPerson()).toBeTruthy();
});

it("The function 'renderPerson' should return the expected output. Testing with Bob" , function () {
    expect(renderPerson('Bob', '05/22/1983', 'green', 23, 'male')).toBe("Bob is a 23 years old male born in 05/22/1983 with green eyes")
});




