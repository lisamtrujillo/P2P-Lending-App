const fs = require('fs');

const PersonModel = require('../models/personModel');


async function add(person) {
  return PersonModel.create(person);
}

async function find(id) {
  return PersonModel.findOne({ id }).populate('wallet');
}

async function findAll() {
  return PersonModel.find().populate('wallet');
}

/* async function del(id) {
  return PersonModel.remove({ id });
} */

module.exports = {
  add,
  find,
  findAll,
  // del,
};
