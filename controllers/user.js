var userModel=require('../models/userModel');
exports.regist=function (req,res) {
    var name=req.body.username;
    var pwd=req.body.password;
    var sex = req.body.sex;
    userModel.save({
        username:name,
        password:pwd,
        sex:sex
    },function(result){
        if(result){
            console.log(result);
            res.redirect('/login')
        }
    })
}
exports.checkUser=function (req,res) {
    var name=req.query.username;
    console.log('name='+name);
    userModel.getByName(name,function (rs) {
        if(rs.length>0){
            console.log('fail');
            res.send('fail');
        }else{
            console.log('success');
            res.send('success');
        }
    })
}
exports.login=function (req,res) {
    var name=req.body.username;
    var pwd=req.body.password;
    userModel.getByNameAndPwd({
        username:name,
        password:pwd,
    },function(result){
        if(result.length>0){
            req.session.user=result[0];
            res.redirect('/');
        }
    })
}
exports.checkLogin=function(req,res){
    var user=req.session.user;
    if(user){
        res.send('success',{user:user});
    }else{
        res.send('fail');
    }
}