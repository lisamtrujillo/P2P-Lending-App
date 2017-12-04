const fs = require('fs');
const LoanGroupModel = require('../models/loanGroupModel');

async function add(members) {
  return LoanGroupModel.create(members);
  // const memberSet = new Set(members);
  // return LoanGroupModel.create(memberSet);

  /* await saveAll(loanGroup);
  return loanGroup; */
}

async function find(id) {
  return LoanGroupModel.findOne({ _id: id })
    .populate({
      path: 'members',
      populate: { path: 'wallet' }
     });
}

async function findAll() {
  return LoanGroupModel.find().populate('members');
/*   return new Promise((resolve, reject) => {
    fs.readFile(dbPath, 'utf8', (err, fileData) => {
      if (err) return reject(err);

      const jsonContents = JSON.parse(fileData);

      const tempLoanGroupMembers = new Set([]);

      if (jsonContents.members) {
        for (let i = 0; i < jsonContents.members.length; i++) {
          for (const person of jsonContents.members) {
            if (person.name === jsonContents.members[i].name) {
              tempLoanGroupMembers.add(person);
            }
          }
        }
      }

      const loanGroup = LoanGroupModel.create(tempLoanGroupMembers);
      resolve(loanGroup.members);
    });
  }); */
}

/* async function saveAll(loanGroup) {
  return new Promise((resolve, reject) => {
    const tempLoanGroup = loanGroup;
    tempLoanGroup.members = Array.from(tempLoanGroup.members); // temp array because JSON can only stringify Arrays and not Sets

    fs.writeFile(dbPath, JSON.stringify(tempLoanGroup), (err, file) => {
      if (err) return reject(err);

      resolve();
    });
  });
} */

module.exports = {
  add,
  find,
  findAll,
};
