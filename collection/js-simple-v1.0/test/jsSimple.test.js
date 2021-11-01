const expect = require('chai').expect;
const jsSimple = require('../src/index')

describe('js Simple', ()=>{
    it('should return a greeting with the input name', ()=>{
        let output = jsSimple({name:'wendy'});
        expect(output).to.be.equal('Welcome to Knowledge Grid, wendy')
    })
})

