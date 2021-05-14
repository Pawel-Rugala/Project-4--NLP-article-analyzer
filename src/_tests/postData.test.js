const postData = require('../client/js/postData');

describe('Testing the post functionality', () => {
  test('Testing the postData() function', () => {
    expect(postData).toBeDefined();
  });
});

describe('Test catch error of postData', () => {
  test('It should return error msg', () => {
    return postData().catch((e) => expect(e).toMatch('error'));
  });
});
