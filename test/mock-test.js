const request = require('supertest');
const app = require('../app');

describe("GET /",() => {
    it(" Hello World!", (done) => {
        request(app).get("/").expect("Hello World!", done);
    })
})