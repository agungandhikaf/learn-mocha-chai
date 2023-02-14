const chai = require('chai')
const chaiHttp = require('chai-http');
const chaiJsonSchema = require('chai-json-schema');
const expect = require('chai').expect
chai.use(chaiHttp);
chai.use(chaiJsonSchema);
const { ep_authorizedAccount } = require('../../src/endpoint/account/demoqa-authorized.js')
const api = chai.request(process.env.baseUrl);

module.exports = function(){
    describe('Authorized account',() => {
        it('Success authorized account', (done) => {
            api.post(ep_authorizedAccount)
            .set("Authorization", "Bearer " + process.env.accessToken)
            .set("Content-type", "application/json")
            .send({
                userName : process.env.userName,
                password : process.env.password
        })
        .end(function(err, res){
            console.log(body)
            expect(res.statusCode).to.equals(200);
                // expect(res.body).to.be.jsonSchema(data.validData);
            done();
        })
        })
    })
}
