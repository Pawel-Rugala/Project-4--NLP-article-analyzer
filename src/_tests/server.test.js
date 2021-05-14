const request = require('supertest');
const app = require('../server/server');

describe('Test the root path', () => {
  test('It should response the GET method', () => {
    return request(app).get('/').expect(200);
  });
});
