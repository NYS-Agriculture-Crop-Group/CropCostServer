const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const Machines = mongoose.model('Machines');

//POST create new machine, auth required
router.post('/', auth.required, (req, res, next) => {
    const { payload: { id } } = req;
    console.log(req.body);
    /*Machines.find({ownerid: id})
    .then((result) => {
        return res.status(201).json(result);
    });*/
});

router.get('/', auth.required, (req, res, next) => {
    const { payload: { id } } = req;
    console.log(req.body);
    Machines.find({ownerid: id})
    .then((result) => {
        return res.status(201).json(result);
    });
});
  
module.exports = router;