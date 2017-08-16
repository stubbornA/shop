var db=require('./db');
exports.add=function (product,callback) {
    console.log(product)
    db.query("insert into item(prod_id,prod_name,prod_num,user_id,prod_size,prod_price) values(?,?,?,?,?,?)"
        ,[product.productId,product.productName,product.productNum,product.userId,product.productSize,product.productPrice],callback);
}
exports.queryItem=function (userid,callback) {
    db.query("select * from item where user_id="+userid,callback);
}
exports.queryByItemId=function (itemid,callback) {
    db.query("select * from item where item_id="+itemid,callback);
}
exports.upNumOfitemById=function (itemId,prodNum,callback) {
    db.query("UPDATE item SET prod_num= '"+prodNum+"' WHERE item_id = '"+itemId+"'",callback);
    db.query("UPDATE item SET prod_num= "+prodNum+" WHERE item_id = "+itemId,callback);
    // 'UPDATE users SET foo = ?, bar = ?, baz = ? WHERE id = ?', ['a', 'b', 'c', userId]

}