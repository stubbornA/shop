/**
 * Created by fangjiejie on 2017/7/21.
 */
var db=require('./db');
exports.getByName=function (name,callback) {
    db.query('select * from user where username=?',[name],callback)
}
exports.save=function (user,callback) {
    db.query("insert into user(username,password,sex)" + " values('"+user.username+"','"+user.password+"','"+user.sex+"')",callback);
}
exports.getByNameAndPwd=function (user,callback){
    db.query('select * from user where username=? and password=?',[user.username,user.password],callback);
}