var monk = require('monk')

module.exports = monk('localhost:27017/cars_development')
