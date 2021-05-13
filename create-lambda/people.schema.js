'use strict';

const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
  '_id': String,
  'name': String,
  'phone': String
})

module.exports = dynamoose.model('people', peopleSchema); // contacts is the database table name in dynamo 
