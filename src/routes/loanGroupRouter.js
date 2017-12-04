const express = require('express');

const router = express.Router();

const LoanGroupService = require('../services/loanGroupService');
const PersonService = require('../services/personService');
const WalletModel = require('../models/walletModel');

// @ loan-group
router.get('/', async (req, res, next) => {
  const people = await PersonService.findAll();
  // const people = await LoanGroupService.findAll();
  res.render('loanGroupSubmit', { people });
});

// show members of 1 loan group, not multiple loan groups
router.get('/:id', async (req, res, next) => {
  const loanGroup = await LoanGroupService.find(req.params.id);
  // res.send(loanGroup);
  // converting from Set to Array for front end to render
  // const arrLoanGroupMembers = Array.from(loanGroupMembers);

  res.render('loanGroupTransfer', { loanGroup });
});


// @ loan-group
router.post('/', async (req, res, next) => {
  const wallet = await WalletModel.create({});// move to service??
  // const people = await PersonService.findAll();
  const obj = {
    members: req.body,
    wallet: wallet.id,
  };
  /*   person.friends.addToSet(target)
  const updatedPerson = await person.save()
  res.send(updatedPerson) */
  const loanGroup = await LoanGroupService.add(obj);

  // res.redirect('confirmation');
  console.log(loanGroup.id);
  res.send(loanGroup);
});

router.get('/desposit', async (req, res, next) => {
  console.log("transfer complete")
  /* console.log(req.body.person_id)
  console.log(req.body.amount)   */ 

  // TODO: actual wallet update and saving here

  res.send("transfer complete")
/*   const loanGroup = await LoanGroupService.find(req.params.id);
  console.log('transfer');
  res.send(loanGroup); */
});

module.exports = router;
