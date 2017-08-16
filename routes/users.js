var express = require('express');
var router = express.Router();

/* GET users listing. */
var user=require('../controllers/user');
router.get('/', function(req, res) {
  res.send('respond with a resource');
});
router.get('/checkUser',user.checkUser);
router.post('/regist',user.regist);
router.post('/login',user.login);
router.get('/checkLogin',user.checkLogin);
module.exports = router;
