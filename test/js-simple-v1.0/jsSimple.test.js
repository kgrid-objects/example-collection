const expect = require('chai').expect;
const jsSimple = require('../../collection/js-simple-v1.0/src')

describe('js Simple', ()=>{
    it('should return a greeting with the input name', ()=>{
        let output = jsSimple({name:'bob'});
        expect(output).to.be.equal('Welcome to Knowledge Grid, bob')
    })
})

