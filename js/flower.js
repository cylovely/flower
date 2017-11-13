$.get("data/flower.php",data=>{
	var html="";
	for(var tmp of data){
		console.log(tmp);
		html+=`<li>
                <a href="#" class="picture"><img src="img/flower/${tmp.f_src}"/></a>
                <p>￥${tmp.f_price}</p>
                <a href="#" class="per-flower-title">${tmp.f_title}</a>
                <a href="#" class="collect coll"><span></span>收藏</a> 
				<a href="#" class="collect add-to-cart"><span></span>加入购物车</a>
            </li>`;
	}
	$(".flower-ul-list").html(html);
})