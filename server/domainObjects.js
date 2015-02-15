var Sequilize = require("sequelize");
var config = require("./sqlliteconfig");
var sequilize = config.sequilize;

exports.Customer = sequilize.define("customer", {
  id: {type:Sequilize.UUID, primaryKey : true},
  name:{type : Sequilize.STRING}
})
exports.Framework = sequilize.define("framework", {
  id: {type:Sequilize.UUID, primaryKey : true},
  customerId:{type:Sequilize.UUID},
  name:{type:Sequilize.STRING},
  description:{type:Sequilize.STRING}
})

exports.AssetCategory = sequilize.define("asset_category", {
  id: {type:Sequilize.UUID, primaryKey : true},
  customerId:{type:Sequilize.UUID},
  category : {type:Sequilize.STRING}
})

exports.SecurityAttribute = sequilize.define("security_attribute",{
  id: {type:Sequilize.UUID, primaryKey : true},
  customerId:{type:Sequilize.UUID},
  attribute : {type:Sequilize.STRING}
})

exports.AssetCategorySecurityAttribute = sequilize.define("category_attribute", {
  customerId:{type:Sequilize.UUID},
  categoryId:{type:Sequilize.UUID},
  attributeId:{type:Sequilize.UUID},
  impact:{type:Sequilize.FLOAT}
})

exports.VulnerabilityArea = sequilize.define("vulnerability_area", {
  id: {type:Sequilize.UUID, primaryKey : true},
  customerId:{type:Sequilize.UUID},
  name:{type : Sequilize.STRING}
})

exports.RiskLibrary = sequilize.define("risk_library",{
  id: {type:Sequilize.UUID, primaryKey : true},
  customerId:{type:Sequilize.UUID},
  attributeId:{type:Sequilize.UUID},
  vulnerabilityAreaId:{type:Sequilize.UUID},
  title:{type : Sequilize.STRING},
  description:{type : Sequilize.STRING},
  ranking:{type : Sequilize.STRING},
  selected:{type : Sequilize.BOOLEAN}
})


