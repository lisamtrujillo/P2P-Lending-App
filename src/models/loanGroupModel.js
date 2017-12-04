const mongoose = require('mongoose');
// const AutoIncrement = require('mongoose-sequence')(mongoose);

const LoanGroupSchema = mongoose.Schema({
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person',
  }],
  wallet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Wallet',
  },
});

// LoanGroupSchema.plugin(AutoIncrement, { inc_field: 'id' });

const LoanGroupModel = mongoose.model('LoanGroup', LoanGroupSchema);

module.exports = LoanGroupModel;


// const Wallet = require('../classes/Wallet');

// module.exports = class LoanGroup {
/**
     * A loan group has a set of members and theit Wallet has a 0 balance by default
     * @param {Set} members
     */
/*   constructor(_members) {
    this.members = _members;
    this.wallet = new Wallet(0);
  } */

/**
      *  create a LoanGroup with members
      *  @param {Set} members
      *  @return {LoanGroup}
      */
/*   static create(members) {
    return new LoanGroup(members);
  } */
// };
