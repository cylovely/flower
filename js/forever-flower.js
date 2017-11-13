$.get("data/forever-flower.php",data=>{
	var html="";
	for(var tmp of data){
		html+=`<li>	
				<a href="#">
					<img src="img/forever-flower/${tmp.ff_src}" />
					<p class="product-sort">${tmp.ff_sort}</p>
					<p class="title">${tmp.ff_title}</p>
					<p>${tmp.ff_describe}</p>
					<p class="price">￥${tmp.ff_price}</p>
				</a>
			</li>`;
	}
	$("#forever-flower-list").html(html);
})