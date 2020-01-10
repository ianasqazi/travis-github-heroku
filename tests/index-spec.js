// import { describe } from "mocha";

const expect = require('chai').expect;
const server = require('../server');

console.log("test file, server = \n", server);

describe('test', () => {
    it('this simple test should return a string', () => {
        expect('Test CI with Travis').to.equal('Test CI with Travis');
    });
    process.exit();
});
