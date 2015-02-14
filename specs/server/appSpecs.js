var expect = require("expect.js");
var request = require("request");
var app = require("../../server/app.js");

describe("Array", function(){
  it("get all resources", function(done){
    request.get({"uri":"http://localhost:9000", "Content-Type": "application/json"}, function(error, response, body){
      expect(body).to.eql(app.RESOURCES);
      done();
    })
  })
})
