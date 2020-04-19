const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const { Schema } = mongoose;

const MachineSchema = new Schema({
    ownerid: String,
    machineName: String,
    efficiency: Number,
    efficiency_unit: String,
    haulingCapacity: Number,
    haulingCapacityUnits: String,
    working_width: Number,
    operating_cost: Number,
    operatingCostUnits: String,
    purchaseDate: Date,
    purchasePrice: Number,
    salvagePrice: Number,
    depriciation: Number,
    paymentsPerYear: Number,
    paymentsTotal: Number,
    interestRate: Number,
    shelter: Number,
    insurance: Number,
    notes: [
        {
            created_at: {
                type: Date,
                default: Date.now()
            },
            text: String
        }
    ]

});



mongoose.model('Machines', MachineSchema);