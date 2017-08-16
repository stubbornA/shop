$(function () {
    function upNumOfcartById(cartId,prod_num) {
        // alert("upNumOfcartById");
        var id=parseInt(cartId);
        var num=parseInt(prod_num);
        var data={
            cartId:id,
            prodNum:num
        }
        $.get('/cart/upNumOfcartById',data,function (data) {


        })
        var num=parseInt($('#cartTable>tbody .tdProductNum').val());
        var price=parseInt($('#cartTable>tbody .cakeprice').html());
        // alert(num+"---"+price);
        // alert(num*price);
        $('#cartTable>tbody .cakesum').html(num*price);
        $('#priceSum').html(num*price);
    }
    $('#cartTable>tbody .num-minus').on('click',function () {
        // alert("minus");
        var $id=$('#cartTable .tdCartid').val();
        var $num=$('#cartTable .tdProductNum').val();
        upNumOfcartById($id,$num);
    });
    $(' #cartTable>tbody .num-add').on('click',function () {
        // alert("add");
        var $id=$('#cartTable .tdCartid').val();
        var $num=$('#cartTable .tdProductNum').val();
        upNumOfcartById($id,$num);
    })

})