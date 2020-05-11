const mongoose = require('mongoose');
const passport = require('passport');
const router = require('express').Router();
const auth = require('../auth');
const Employs = mongoose.model('Employs');

router.get('/allemployinfo', auth.required, (req, res, next) => {
    const { payload: { id } } = req;
    var count
    //console.log(Employs)
    Employs.countDocuments().then((c)=>{
        count=c
    })

    pageNum=parseInt(req.query.page) ? parseInt(req.query.page) : 1;
    pageSize=parseInt(req.query.limit) ? parseInt(req.query.limit) : 10;

    Employs.find()
        .skip((pageNum - 1) * pageSize)
        .limit(pageSize)
        .then((result)=>{
        return res.json({'count': count,'status' : 200,'data' : result,'code':0})
    })

    //console.log(count)

    pageNum=parseInt(req.query.page) ? parseInt(req.query.page) : 1;
    pageSize=parseInt(req.query.limit) ? parseInt(req.query.limit) : 10;

      
});
  
module.exports = router;