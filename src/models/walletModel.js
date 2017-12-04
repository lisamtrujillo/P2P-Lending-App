const mongoose = require('mongoose');

const WalletSchema = mongoose.Schema({
  tokens: {
    type: Number,
    required: true,
    default: 0,
  },
});

const WalletModel = mongoose.model('Wallet', WalletSchema);

module.exports = WalletModel;



//module.exports = class Wallet {
  /**
     * The Wallet always starts with a token (money) value
     * @param {Number} _tokens
     */
 /*  constructor(_tokens) {
    this.tokens = _tokens;
  } */

  /**
     * Gets the balance of the Wallet
     * @return {Number}
     */
/*   getBalance() {
    return this.tokens;
  } */

  /**
     * Adds tokens (money) to the Wallet
     * @param {Number} tokenAmount
     */
/*   depositMoney(tokenAmount) {
    this.tokens += tokenAmount;
  } */

  /**
     * Subtracts tokens (money) from the Wallet
     * @param {Number} tokenAmount
     */
/*   withdrawlMoney(tokenAmount) {
    this.tokens -= tokenAmount;
  } */
//};
