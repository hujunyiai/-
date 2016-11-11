define(['jquery','myutil','app/myfn'],function ($,x,url) {
    function getMenuData(freetrval) {
        var xhr = x();  //创建ajax对象
        xhr.open('get',url.getBaseURL() + '/freewalk');
        xhr.send(null);
        xhr.onreadystatechange = function (e) {
            if(xhr.readyState === 4){
                var frees = JSON.parse(xhr.responseText);
                console.log(frees);
                var freeObj = $(".freetrval_title a");
                frees.forEach(function (elem,index) {
                	var a = $("<a></a>");
                	a.html(elem.title);
                	var lis = $("<li></li>");
                	lis.append(a);
                	var ul = $("<ul></ul>");
                	ul.append(lis);
                	freetrval.append(ul);
                	elem.data.forEach(function(elem,index){
                		$('.f_freetrval_detail h2').eq(index).html(elem.title);
                		$('.f_freetrval_detail p').eq(index).html(elem.time);
                		$('.freetrval_list b').eq(index).html(elem.price);
                		$('.first_ft img').eq(index).attr('src',elem.imgUrl);
                		$('.freetrval_detail h3').eq(index).html(elem.title);
                		$('.freetrval_detail b').eq(index).html(elem.price);
                		$('.freetrval_list img').not('.first_ft,.freetrval_more').eq(index).attr('src',elem.imgUrl);
                	})
                })
                
            	
            }
            
        }
    }
    return getMenuData;
});