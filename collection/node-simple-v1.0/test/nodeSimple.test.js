const expect = require('chai').expect;
const nodeSimple = require('../src/welcome')

describe('js Simple', ()=>{
    it('should return a greeting with the input name', ()=>{
        let output = nodeSimple({name:'wendy'});
        expect(output).to.be.equal('Welcome to Knowledge Grid, wendy')
    })
})

