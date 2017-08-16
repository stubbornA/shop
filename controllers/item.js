var itemModel =require('../models/ItemModel');
exports.buy=function (req,res) {
    var productId=req.body.productId;
    var productNum=req.body.productNum;
    var user=req.session.user;
    var userId=user.user_id;
    var productName=req.body.productName;
    var productPrice=req.body.productPrice;
    var productSize=req.body.productSize;
    itemModel.add({
        productId:productId,
        productName:productName,
        productNum:productNum,
        userId:userId,
        productSize:productSize,
        productPrice:productPrice
    },function (rst) {
        var rs1;
        if(rst){
           itemModel.queryByItemId(rst.insertId,function (rs0) {
                rs1=rs0;
                res.render('cart',{rs:rs1})
             })
        }
    })
    //展示购物车
}

exports.queryItem=function (req,res) {
    var userid=req.query.userId;
    itemModel.queryItem(userid,function (rs) {
        res.render('cart',{rs:rs});
    })
}

exports.upNumOfitemById=function (req,res) {
    var itemid=req.query.itemId;
    var prodnum=req.query.prodNum;
    itemModel.upNumOfitemById(itemid,prodnum,function (rs) {
        // res.send('cart');
    })
}