var express = require('express');
var router = express.Router();

/* GET home page. */
var welcome=require("../controllers/welcome");
router.get('/', welcome.index);
router.get('/login',welcome.login);
router.get('/regist',welcome.regist)
module.exports = router;
