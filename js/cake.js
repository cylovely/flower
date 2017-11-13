function f(str,url){
	$.get("data/cake.php",data=>{
		var html="";
		for(var tmp of data){
			if(tmp.c_sort==str)
				html+=`<li>
					<a href="#" class="picture"><img src="img/cake/${tmp.c_src}"/></a>
					<p>￥${tmp.s_price}</p>
					<a  href="#" class="per-flower-title">${tmp.c_title}</a>
					<p class="tips"></p>
					<a href="#" class="collect coll"><span></span>收藏</a> 
					<a href="#" class="collect add-to-cart"><span></span>加入购物车</a>
				</li>`;
		}
		$(url).html(html);
	})
}
f("yuanzu",".yuanzu-ul");
$(".yuanzu-ul .tips").html("元祖授权销售");
f("nuoxin",".nuoxin-ul");
f("INCAKE",".INCAKE-ul");
f("beisike",".beisike-ul");
f("BONCAKE",".BONCAKE-ul");
f("Mcake",".Mcake-ul");
f("wofuzi",".wofuzi-ul");
$(".wofuzi-ul .tips").html("请至少提前6小时预订");
f("mikamika",".mikamika-ul");
f("faxini",".faxini-ul");
f("xingfuxibing",".xingfuxibing-ul");
f("Vcake",".Vcake-ul");
f("kesongfang",".kesongfang-ul");
f("yipinxuan",".yipinxuan-ul");
$(".yipinxuan-ul .tips").html("此商品需和鲜花一起订购");
f("xinzhihe",".xinzhihe-ul");
f("quanguo",".quanguo-ul");


