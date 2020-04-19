const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

const MachineSchema = new Schema({
    ownerid: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    efficiency: {
        type: Number,
        required: true
    },
    efficiencyUnit: {
        type: String,
        enum: ['mpg', 'hp'],
        default: 'mpg'
    },
    haulingCapacity: {
        type: Number,
        required: true
    },
    haulingCapacityUnits: {
        type: String,
        enum: ['lbs', "kgs"],
        default: "lbs"
    },
    workingWidth: {
        type: Number,
        required: true
    },
    operatingCost: {
        type: Number,
        required: true
    },
    operatingCostUnits: {
        type: String,
        enum: ['acre', "hour"],
        default: "hour"
    },
    purchaseDate: {
        type: Date,
        required: true
    },
    purchasePrice: {
        type: Number,
        default: 0
    },
    salvagePrice: {
        type: Number,
        default: 0
    },
    depriciation: {
        type: Number,
        default: 0
    },
    paymentsPerYear: {
        type: Number,
        default: 0
    },
    paymentsTotal: {
        type: Number,
        default: 0
    },
    interestRate: {
        type: Number,
        default: 0
    },
    shelter: {
        type: Number,
        default: 0
    },
    insurance: {
        type: Number,
        default: 0
    },
    notes: [
        {
            created_at: {
                type: Date,
                default: Date.now()
            },
            text: String,
            default: []
        }
    ]

});



mongoose.model('Machines', MachineSchema);