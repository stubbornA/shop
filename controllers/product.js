var productModel =require('../models/productModel');

exports.list=function (req,res) {
    productModel.getAll(function (rs) {
        res.send(rs);
    });
}

exports.detail=function (req,res) {
    var productId= req.query.productId;
    productModel.getById(productId,function (rs) {
        console.log(rs[0]);
        res.render('productDetail',{product:rs[0]});
    })
   
}

