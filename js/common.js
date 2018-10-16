
(function($){
	$(document).ready(function(){		



		var sp1 = 300;

		$(".gnb_hover_line").css('opacity','0');

		$(".gnb_area").on("mouseleave blur", function(){
			$(".gnb_hover_line").stop().animate({opacity:'0'}, sp1);
		});

		$(".gnb_mn01 > a").on("mouseenter focus", function(){
			$(".gnb_hover_line").stop().animate({left:'27px',width:'66px',opacity:'1'}, sp1);
		});

		$(".gnb_mn02 > a").on("mouseenter focus", function(){
			$(".gnb_hover_line").stop().animate({left:'147px',width:'66px',opacity:'1'}, sp1);
		});

		$(".gnb_mn03 > a").on("mouseenter focus", function(){
			$(".gnb_hover_line").stop().animate({left:'267px',width:'66px',opacity:'1'}, sp1);
		});

		$(".gnb_mn04 > a").on("mouseenter focus", function(){
			$(".gnb_hover_line").stop().animate({left:'396px', width:'48px',opacity:'1'}, sp1)
		});

		$(".gnb_mn04_2 > a").on("mouseenter focus", function(){
			$(".gnb_hover_line").stop().animate({left:'507px',width:'66px',opacity:'1'}, sp1);
		});

		$(".gnb_mn05 > a").on("mouseenter focus", function(){
			$(".gnb_hover_line").stop().animate({left:'627px',width:'66px',opacity:'1'}, sp1);
		});

		$(".gnb_mn06 > a").on("mouseenter focus", function(){
			$(".gnb_hover_line").stop().animate({left:'749px',width:'66px',opacity:'1'}, sp1);
		});

		$(".snb").remove(); 

		$(".gnb > li > a").on("mouseenter focus", function(){
			$(".gnb > li > ul").fadeOut(200);
			$(this).next(".snb").fadeIn(400);
		});

		$(".header_in").on("mouseleave blur", function(){
			$(".snb").fadeOut(200);
		});



		$(".s_sns_list > li > a.facebook").on("mouseenter focus", function(){
			$(this).css("background","#d6d6d6 url('./images/sub/ico_facebook_o.png') center center no-repeat");
		});
		$(".s_sns_list > li > a.blog").on("mouseenter focus", function(){
			$(this).css("background","#d6d6d6 url('./images/sub/ico_blog_o.png') center center no-repeat");
		});
		$(".s_sns_list > li > a.insta").on("mouseenter focus", function(){
			$(this).css("background","#d6d6d6 url('./images/sub/ico_insta_o.png') center center no-repeat");
		});
		$(".s_sns_list > li > a.all_menu").on("mouseenter focus", function(){
			$(this).css("background","#d6d6d6 url('./images/sub/ico_allmenu_o.png') center center no-repeat");
		});

		$(".s_sns_list > li > a.facebook").on("mouseleave blur", function(){
			$(this).css("background","#d6d6d6 url('./images/sub/ico_facebook.png') center center no-repeat");
		});
		$(".s_sns_list > li > a.blog").on("mouseleave blur", function(){
			$(this).css("background","#d6d6d6 url('./images/sub/ico_blog.png') center center no-repeat");
		});
		$(".s_sns_list > li > a.insta").on("mouseleave blur", function(){
			$(this).css("background","#d6d6d6 url('./images/sub/ico_insta.png') center center no-repeat");
		});
		$(".s_sns_list > li > a.all_menu").on("mouseleave blur", function(){
			$(this).css("background","#d6d6d6 url('./images/sub/ico_allmenu.png') center center no-repeat");
		});

		$(".sub_header_in > h2").css('opacity','0');
		$(".sub_header_in > h2").delay(200).animate({opacity:'1', 'top':'80px'}, 500);

		$(".photo_box").on("mouseenter focus", function(){
			$(this).find('img').stop().animate({"width":"108%","left":"-15px","top":"-10px"});
			$(this).css("border","1px solid #c31800");
		});

		$(".photo_box").on("mouseleave blur", function(){
			$(this).find('img').stop().animate({"width":"100%","left":"0px","top":"0px"});
			$(this).css("border","1px solid #ddd");

		});

		timer = setInterval(function(){moveOn();}, 1200);

		function moveOn(){
			$(".mg_effect").find(".ico")
			.animate({"top":"40px","opacity":"1"}, 400)
			.animate({"top":"45px","opacity":"0.6"}, 800);
		}

		$(".photo_info > .more > a").on("click", function(){
			$(this).parent().prev().prev().parent().prev().find(".example-image-link").trigger("click");
			return false;
		});

		$(".photo_txt > li > div > span").css("display","none");
		$(".v_copy_wrap").css("display","none");

/*
		$(".grid09 > a").on("click", function(){
			alert("준비중입니다");
			return false;
		});
*/


		$(".gnb_sd03 > a").on("click", function(){
			alert("전화문의 : 010-8888-8084");
			return false;
		});



		$(".s_sns_list > li > .all_menu").on("click", function(){
			alert("준비중입니다");
			return false;
		});

	});

})(jQuery);

