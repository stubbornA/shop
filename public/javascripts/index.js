$(function () {
    var $col=$('#content .col');
    $.get('/products/list',function (data) {
        console.log(data);
        for(var i=0;i<data.length;i++){
            var html='<li>'
                    +'<a href="products/detail?productId='+data[i].prod_id+'">'
                +'<img src="'+data[i].img_src+'" alt=""/>'
                +'<p>'
                +'<span class="title">'+data[i].prod_name+'</span>'
                +'<span class="price">'+data[i].prod_price+'</span>'
                +'</p>'
                   +'</a>'
                +'</li>';
        var ul=getMinUl();
            ul.append(html);
        }
    },'json')

    function getMinUl() {
        var min=$col.eq(0);
        for(var i=0;i<$col.length;i++){
            if($col.eq(i).height()<min.height()){
                min=$col.eq(i);
            }
        }
        return min;
    }
})
