const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use("/machines", require('./machines'));
module.exports = router;