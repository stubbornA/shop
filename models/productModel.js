var db=require('./db');
exports.getAll=function (callback) {
    db.query("select prod.* ,img.img_src from product prod,product_img img " +
        "where prod.prod_id=img.prod_id",callback);
};
exports.getById=function(productId,callback){
    db.query('select * from product where prod_id=?',[productId],function (rs) {
        db.query('select * from product_img where prod_id=?',[productId],function (rs1) {
            rs[0].productImg=rs1;
            db.query('select * from product_size where prod_id=?',[productId],function (rs2) {
                rs[0].productSize=rs2;
                callback(rs);
            })
        })

    })
}