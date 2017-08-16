var express = require('express');
var router = express.Router();
/* GET users listing. */
var item=require('../controllers/item');
router.post('/buy',item.buy);
router.get('/upNumOfitemById',item.upNumOfitemById);
module.exports = router;
