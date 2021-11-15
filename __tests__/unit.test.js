// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('Valid phone number', () => {
    expect(functions.isPhoneNumber('(989)123-0973')).toBe(true)
})
test('Valid phone number', () => {
    expect(functions.isPhoneNumber('654-521-1234')).toBe(true)
})
test('Valid phone number', () => {
    expect(functions.isPhoneNumber('(999')).toBe(false)
})
test('Valid phone number', () => {
    expect(functions.isPhoneNumber('1-2-3')).toBe(false)
})

test('Valid email', () => {
    expect(functions.isEmail('xyz@gmail.com')).toBe(true)
})
test('Valid email', () => {
    expect(functions.isEmail('abby@redmail.com')).toBe(true)
})
test('Valid email', () => {
    expect(functions.isEmail('aws@gmail')).toBe(false)
})
test('Valid email', () => {
    expect(functions.isEmail('arcjsoe.com')).toBe(false)
})

test('Valid password', () => {
    expect(functions.isStrongPassword('Abcd_gefh123')).toBe(true)
})
test('Valid password', () => {
    expect(functions.isStrongPassword('mYbIrThDaY27th')).toBe(true)
})
test('Valid password', () => {
    expect(functions.isStrongPassword('1hi2bye3yes4no')).toBe(false)
})
test('Valid password', () => {
    expect(functions.isStrongPassword('ace')).toBe(false)
})

test('Valid date', () => {
    expect(functions.isDate('11/14/2021')).toBe(true)
})
test('Valid date', () => {
    expect(functions.isDate('1/01/2021')).toBe(true)
})
test('Valid date', () => {
    expect(functions.isDate('11/15/20')).toBe(false)
})
test('Valid date', () => {
    expect(functions.isDate('1012009')).toBe(false)
})

test('Valid hex code', () => {
    expect(functions.isHexColor('00FF00')).toBe(true)
})
test('Valid hex code', () => {
    expect(functions.isHexColor('123')).toBe(true)
})
test('Valid hex code', () => {
    expect(functions.isHexColor('00FF00FF00')).toBe(false)
})
test('Valid hex code', () => {
    expect(functions.isHexColor('A')).toBe(false)
})