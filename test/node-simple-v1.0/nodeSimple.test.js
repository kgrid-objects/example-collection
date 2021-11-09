const expect = require('chai').expect;
const nodeSimple = require('../../collection/node-simple-v1.0/src/welcome')

describe('js Simple', ()=>{
    it('should return a greeting with the input name', ()=>{
        let output = nodeSimple({name:'bob'});
        expect(output).to.be.equal('Welcome to Knowledge Grid, bob')
    })
})

