var Sequelize = require("sequelize");

exports.sequilize = new Sequelize("security", "security", "security", {
    omitNull: true,
    define: {
      syncOnAssociation: true,
      charset: 'utf-8',
      collate: 'utf8_general_ci',
      timestamp: true
    },
    dialect: 'sqlite',
    // storage: '/sqlite/database.lite',
    language: 'en',
    logging: function () {
    }
  }
)
