exports.index=function (req,res) {
    var user=req.session.user;
    res.render('index',{user:user});
}
exports.login=function(req,res){
    res.render('login');
}
exports.regist=function (req,res) {
    res.render('regist');
}