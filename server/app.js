var restify = require("restify");


const RESOURCES =  ["/customer", "/framework"];
function catalogue(req, res, next){
  res.send(RESOURCES);
  return next();
}

function createCustomer(req, res, next) {


  next();
}




















/******************************************************************************/
var server = restify.createServer();
server.get("/", catalogue);
server.put("/customer/:id", createCustomer);
server.listen(9000);
