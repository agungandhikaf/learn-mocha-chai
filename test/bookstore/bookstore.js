const chai = require('chai')
const chaiHttp = require('chai-http');
const chaiJsonSchema = require('chai-json-schema');
const expect = require('chai').expect
chai.use(chaiHttp);
chai.use(chaiJsonSchema);
const { ep_addBook } = require('../../src/endpoint/bookstore/demoqa-bookstore.js')
const api = chai.request(process.env.baseUrl);
const isbn = "9781491950296"

module.exports = function(){
    describe('Add book',() => {
        it('Success add book', (done) => {
            api.post(ep_addBook)
            .set("Authorization", "Bearer " + process.env.accessToken)
            .set("Content-type", "application/json")
            .send({
                userId : process.env.userId,
                collectionsOfIsbns : [{
                    isbn : isbn
                }]
            })
            .end(function(err, res){
                console.log(body)
                expect.apply(res.statusCode).to.equals(200);
                done();
            })
        })
    })
}