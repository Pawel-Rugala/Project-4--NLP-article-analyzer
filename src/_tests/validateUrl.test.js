const validateUrl = require('../client/js/validateUrl');

describe('Testing the URL validator', () => {
  test('Testing the validateUrl function', () => {
    expect(validateUrl).toBeDefined();
  });
  test('Testing the valid url', () => {
    let txt = 'http://google.com';
    expect(validateUrl(txt)).toBe(true);
  });
  test('Testing invalid url', () => {
    let txt = 'dummy text';
    expect(validateUrl(txt)).toBe(false);
  });
});
