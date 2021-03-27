require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
exports.createSchemaCustomization = require('./src/gatsby/node/createSchemaCustomization')
exports.createPages = require('./src/gatsby/node/createPages')
