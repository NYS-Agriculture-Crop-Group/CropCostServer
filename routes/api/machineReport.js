const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const Machines = mongoose.model('Machines');
const PDFDocument = require("pdfkit");

//POST create new machine, auth required
/*router.post('/', auth.required, (req, res, next) => {
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
//});

const calculateLoanInfo = (machine) => {
    let loan_info = [];

    let beginning_loan_balence = machine.purchasePrice;
    const pay_periods = machine.paymentsPerYear;
    const interest_rate = machine.interestRate;
    let initial_date = machine.purchaseDate;
    let current_period = 1;
    while(beginning_loan_balence > 0){
        loan_info.push({
            "Date": initial_date,
            "Julian Day": "",
            "Yearly Interest": interest_rate,
            "Pay Periods per Year": pay_periods,
            "Pay Period": current_period,
            "Loan Balance": beginning_loan_balence 
        });
        beginning_loan_balence -= (interest_rate/pay_periods)*beginning_loan_balence;
        current_period += 1;
    }
    return loan_info;
}

router.get('/', auth.required, async (req, res, next) => {
    const { payload: { id } } = req;
    const { body: {machineName}} = req;

    console.log(req.body);
    let result = await Machines.find({ownerid: id, name: machineName});
    if (result == null){
        return res.status(404).json({
            status: "error",
            errors: [
                "No results found"
            ]
        });
    }

    res.status(200).send(calculateLoanInfo(result));

});
  
module.exports = router;