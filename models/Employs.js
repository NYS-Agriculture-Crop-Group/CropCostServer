const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

const EmploySchema = new Schema({
    employname: {
        type: String,
        default: ''
    },
    machineid : {
        type: String,
        default: ''
    },
    employtime : {
        type: Date,
        default: Date.now()
    },
    employmoney : {
        type: Number,
        default: 0 
    },
    employhours : {
        type: Number,
        default: 0
    }
});



mongoose.model('Employs', EmploySchema);