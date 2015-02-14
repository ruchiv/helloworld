var restify = require("restify");

const RESOURCES =  ["/customer", "/framework"];
function catalogue(req, res, next){
  res.send(RESOURCES);
  return next();
}




















/******************************************************************************/
var server = restify.createServer();
server.get("/", catalogue);
server.listen(9000);
