const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use("/machines", require('./machines'));
router.use("/employs", require('./employs'));
module.exports = router;
