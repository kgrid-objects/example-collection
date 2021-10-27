const expect = require('chai').expect;
const jsSimple = require('../collection/js-simple-v1.0/src/index')

describe('js Simple', ()=>{
    it('should return a greeting with the input name', ()=>{
        let welcome = jsSimple({name:'bob'});
        expect(welcome).to.be.equal('Welcome to Knowledge Grid, bob')
    })
})