const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const Machines = mongoose.model('Machines');

//POST create new machine, auth required
router.post('/', auth.required, (req, res, next) => {
    const { payload: { id } } = req;
    const { body: {machine}} = req;
    console.log(req.body);
    //validate input
    if(!machine){
        return res.status(422).json({
            errors: [
                "machine is required with fields"
            ]
        })
    }
    //make sure machine name does not already exist for user
    Machines.find({ownerid: id, name: machine.name})
    .then((result) => {
        if(result.length > 0){
            return res.status(443).json({errors: ["A machine with that name already exists"]});
        } else{
            machine.ownerid = id;
            const newMachine = new Machines(machine);
            return newMachine.save().then(() => {
                res.json({ machine: newMachine._id });
            }).catch((err) => {
                res.status(443).json(err);
            });
        }
    })

    /*Machines.find({ownerid: id})
    .then((result) => {
        return res.status(201).json(result);
    });*/
});

router.get('/', auth.required, (req, res, next) => {
    const { payload: { id } } = req;
    console.log(id);
    Machines.find({ownerid: id})
    .then((result) => {
        return res.status(201).json(result);
    });
});
  
module.exports = router;