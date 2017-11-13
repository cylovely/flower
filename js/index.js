function f1(url,p_sort){
	$.get("data/index.php",data=>{
		var html="";
		for(var tmp of data){
			if(tmp.p_sort==p_sort){
				html+=`<a href="#"><img src="img/${tmp.p_src}"></a>`;
			}
		}
		$(url).html(html);
	})
}
//轮播图
f1("#banner>.banner-inner","banner");
//轮播图右侧
f1(".banner-right","banner-right");
//限时推荐
$.get("data/index.php",data=>{
		var str="";
		for(var tmp of data){
			if(tmp.p_sort=="recommend"){
				str+=`<li><a href="#"><img src="img/${tmp.p_src}"></a></li>`;
			}
		}
		var html="<li><a><span></span><p>限时推荐</p></a></li>"+str
            +"<li><a href='#'><img src='img/comic_choose_flowers.jpg' id='cartoon'></a></li>";
		$("#recommend").html(html);
})

function f2(p_sort,url){
	$.get("data/index.php",data=>{
		var html="";
		for(var tmp of data){
			if(tmp.p_sort==p_sort){
				html+=`<li><a href="#"> <img src="img/${tmp.p_src}">
                 <p>${tmp.p_title}</p> <p>￥${tmp.p_price}</p></a>
            </li>`;
			}
		}
		$(url).html(html);
	})
}
//爱情鲜花专区
f2("love","#love");
//送长辈鲜花专区
f2("elder","#elder");
//永生花专区
f2("forever","#forever");
//蛋糕专区
f2("cake","#cake");
//礼品专区
f2("gift","#gift");

//最新评价
$.get("data/index-evaluate.php",data=>{
		var html="";
		for(var tmp of data){
			html+=`<li>
                    <a href="#" class="lf">
                        <img src="img/${tmp.e_src}"><span>${tmp.e_user_name}</span>
                    </a>
                    <span class="lf"><i></i><b>${tmp.e_time}</b></span>
                    <br>
                    <a href="#" class="lf">内容：${tmp.e_content}</a></li>`;
		}
		$("#evaluate").html(html);
	})


function f3(n_sort,url){
	$.get("data/index-news.php",data=>{
		var html="";
		for(var tmp of data){
			if(tmp.n_sort==n_sort){
				html+=`<li><a href="#">${tmp.n_title}</a></li>`;
			}
		}
		$(url).html(html);
	})
}
//感动瞬间
f3("feeling","#feeling");
//最新资讯左边
f3("last-news-left","#last-news-left");
//最新资讯右边
f3("last-news-right","#last-news-right");




