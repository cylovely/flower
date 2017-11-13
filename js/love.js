
$.get("data/love.php",data=>{
		var html="";
		var str="";
		for(var tmp of data){
			//index.html中的勇敢表达爱
			if(tmp.l_sort=="express"){
				html+=`<li class="hidden">
					<img src="img/brave-love/${tmp.l_src}"/>
					<span>
					<h5><span></span>${tmp.l_title}</h5>
					<p>${tmp.l_describe}</p>
					</span>
				</li>`;
			}
		
			//index.html中的勇敢唱出爱
			else if(tmp.l_sort=="sing"){
				str+=`<li>
					<a href="javascript:;" class="click-play">
					<img src="img/brave-love/${tmp.l_src}" />
					<h4>${tmp.l_title}<span>${tmp.l_click_amount}次播放</span></h4>
					<h6>演唱者：${tmp.l_singer}</h6>
					<p>${tmp.l_describe}</p></a>
				</li>`;
			}
		}
		$(".love-story-ul").html(html);
		$(".sing-ul").html(str);
		$(`.love-story-ul>li:nth-child(1)`).attr("class","show");
	})

