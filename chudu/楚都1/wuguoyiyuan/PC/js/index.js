jQuery(".banner").slide({titCell:".hd ul", mainCell:".bd ul", effect:"leftLoop",  autoPlay:true, autoPage:true,delayTime:400});//banner
$(".iyiy_ri li:nth-child(5)").css("margin-left",160);
//医养环境
var w=$(window).width()*0.333333333;
$(".h_perfcon .h_perful li").width(w);
$(".zhec").width(w);
$(".iyy_img").height(w*0.5);
$(".h_perfcon .h_perful").height(w*0.5+50);
$(".zhec").height(w*0.5);
jQuery(".slideGroup .slideBox").slide({ mainCell:"ul",vis:3,prevCell:".sPrev",nextCell:".sNext",effect:"leftLoop"});
jQuery(".slideGroup").slide({titCell:".parHd li",trigger:"click",mainCell:".parBd"});
//医养团队
jQuery(".slideGroup01 .slideBox01").slide({ mainCell:"ul",vis:3,prevCell:".sPrev01",nextCell:".sNext01",effect:"leftLoop"});
jQuery(".slideGroup01").slide({titCell:".parHd01 li",trigger:"click",mainCell:".parBd01"});
//医养生活
$(".iyysh_por li:first-child").css("margin-left",640);
$(".iyysh_por li:nth-child(2)").css("margin-left",320);
$(".iyysh_por li:nth-child(4)").css("margin-left",320);
//荣誉证书
jQuery(".igsjs_ri").slide({mainCell:".bd ul",autoPlay:true,effect:"topMarquee",vis:3,interTime:50});
//新闻
jQuery(".new_l").slide({trigger:"click"});

$(".nts_lc li:nth-child(2)").css({"left":255,"top":0});
$(".nts_lc li:nth-child(3)").css({"left":510,"top":0}).addClass("limi");
$(".nts_lc li:nth-child(4)").css({"left":510,"top":305});
$(".nts_lc li:nth-child(5)").css({"left":255,"top":305});
$(".nts_lc li:nth-child(6)").css({"left":0,"top":305});
$(".n_le li").click(function(){
	$(this).addClass("on").siblings().removeClass("on");
})
$(".ab_ma li:nth-child(even)").find(".ab_pro").css({"float":"left"});
$(".ab_ma li:nth-child(odd)").find(".ab_pro").css({"float":"right"});
$(".ab_ma li:nth-child(odd)").find(".ab_inr").css({"float":"left"});
$(".ab_ma li:nth-child(even)").find(".ab_inr").css({"float":"right"});
jQuery(".ngsry_ma").slide({mainCell:".bd ul",autoPlay:true,effect:"leftMarquee",vis:3,interTime:50});
$(".nyysh_ma li:nth-child(odd)").find(".yysh_pro").css({"float":"left"});
$(".nyysh_ma li:nth-child(even)").find(".yysh_pro").css({"float":"right"});
$(".nyysh_ma li:nth-child(odd)").find(".yysh__inr").css({"float":"right","padding-right":30});
$(".nyysh_ma li:nth-child(even)").find(".yysh__inr").css({"float":"left","padding-left":30});
$(".nybsf_ma li:nth-child(3)").css("margin-right",0);

var xmv1 = $('.xingm');//验证
	    var re1 = /^[\u4e00-\u9fa5 ]{2,20}$/;
	    var xmv2 =  $(".dianhs");
	    var re2 = /^1[3-9]\d{9}$/;
	  function allyz (inputobject,methods){
	        if(inputobject.val() !="" || inputobject.val() != null)
	        {
	            if(methods.test(inputobject.val()))
	            {
	                inputobject.parent('.inp').find(".dui").show();
	                inputobject.parent('.inp').find(".cuo").hide();
	                return 1;
	            }else{
	                inputobject.parent('.inp').find(".cuo").show();
	                inputobject.parent('.inp').find(".dui").hide();
	                return 0;
	            }
	        }
	    }
	
	    $(function(){
	        $(".but").click(function(){
	        	 if(allyz(xmv1,re1) == 0){
                }if(allyz(xmv2,re2) == 0){
                }else if((allyz(xmv1,re1) == 1)&&(allyz(xmv2,re2) == 1)&&(allyz(xmv3,re3) == 1)&&($("#message").val() !== '')){



	            }return false;
	        });
	    })
	    
	    $(window).scroll(function(){
			var aa=$(window).scrollTop();
			if(aa>565){
				$(".n_le").css({"position":"fixed","top":20})
			}else{
				$(".n_le").css({"position":"relative","top":0})
			}
			
		})
	    
$(".jiaz").click(function(){//详情页字号
			var ztx=parseInt($(".new_zw p").css("font-size"));
			if(ztx>12){
				ztx-=2;
				$(".new_zw p").css("font-size",ztx);
			}
			$(".new_zw p").css("font-size",ztx);
		})
		$(".fuz").click(function(){
			var ztd=parseInt($(".new_zw p").css("font-size"));
			if(ztd<26){
				ztd+=2;
				$(".new_zw p").css("font-size",ztd);
			}
			
		})
		
		$(".youce li").hover(function(){//侧边栏
			$(this).find(".dd").stop().animate({right:34},500)
		},function(){
			$(this).find(".dd").stop().animate({right:-164},500)
		})
		scro()
		$(window).scroll(function(){
			scro()
		})
		$(".huid").click(function(){
			$("html,body").animate({"scrollTop":0},500)
		})
		function scro(){
			if($(window).scrollTop()>400){
				$(".huid").fadeIn(500)
			}else{
				$(".huid").fadeOut(500)
			}
		}
		$(window).load(function(){
			var ph=$(".yysh_pro").height()
			$(".yysh__inr").height(ph)
		})
	var maW=$(window).width();
	var maH=$(window).height();
	$(".makr").width(maW*1.012).height(maH);
	$(".yyhjyi li").click(function(){
		$(".makr").show();
		$("body").css("overflow-y","hidden")
		var b=$(this).find("img").attr("src");
		var c=$(this).find("h5").html()
		$(".makr").find("img").attr("src",b);
		$(".makr").find("h5").html(c);;
	})
	$(".makr span").click(function(){
		$(".makr").hide();
		$("body").css("overflow-y","auto");
	})