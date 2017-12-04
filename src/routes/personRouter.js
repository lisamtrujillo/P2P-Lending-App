const express = require('express');

const router = express.Router();

const PersonService = require('../services/personService');
const WalletModel = require('../models/walletModel');

// @/person
router.get('/', async (req, res, next) => {
  // res.send(await PersonService.findAll());
  res.render('personAdd');
});

router.get('/all', async (req, res, next) => {
  const people = await PersonService.findAll();
  res.render('loanGroupSubmit', { people });
});

router.get('/:id', async (req, res, next) => {
  const person = await PersonService.find(req.params.id);
  res.render('personDetail', { person });
});


// @/person
router.post('/', async (req, res, next) => {
  // Q: Why is this NOT in the service??
  const wallet = await WalletModel.create({ tokens: req.body.person_wallet_tokens });

  const obj = {
    name: req.body.person_name,
    wallet: wallet.id,
  };
  const person = await PersonService.add(obj);
  // res.send(person);

  // TODO: render bottom hlaf of page with values - @ loadGroupSubmit.pug
  // refresh page
  res.redirect('/person/all'); 

  // const people = await PersonService.findAll();
  // if (people.length) {
  // res.send(people);
  // }
  // else{
  // }
});

/* router.post('/:id/friends', async (req, res, next) => {
  const person = await PersonService.find(req.params.id);
  const target = await PersonService.find(req.body.targetId);

  person.friends.addToSet(target);
  const updatedPerson = await person.save();
  res.send(updatedPerson);
});

router.delete('/:id', async (req, res, next) => {
  await PersonService.del(req.params.id);

  res.send('ok!');
}); */

module.exports = router;
