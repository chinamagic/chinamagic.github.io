$(document).ready(function(){
	var sp2 = 500;

	//$(".v_copy01").css('opacity','0');
	//$(".v_copy01").delay(500).animate({'opacity':'1','top':'0px'},500);

	$(".vc01").css('opacity','0');
	$(".vc01_01").delay(0).animate({'opacity':'1','margin-top':'-15px'},sp2);
	$(".vc01_02").delay(0).animate({'opacity':'1','margin-top':'-15px'},sp2);
	$(".vc01_03").delay(50).animate({'opacity':'1','margin-top':'-15px'},sp2);
	$(".vc01_04").delay(100).animate({'opacity':'1','margin-top':'-15px'},sp2);
	$(".vc01_05").delay(150).animate({'opacity':'1','margin-top':'-15px'},sp2);
	$(".vc01_06").delay(200).animate({'opacity':'1','margin-top':'-15px'},sp2);
	$(".vc01_07").delay(250).animate({'opacity':'1','margin-top':'-15px'},sp2);
	$(".vc01_08").delay(300).animate({'opacity':'1','margin-top':'-15px'},sp2);
	$(".vc01_09").delay(350).animate({'opacity':'1','margin-top':'-15px'},sp2);
	$(".vc01_10").delay(400).animate({'opacity':'1','margin-top':'-15px'},sp2);
	$(".vc01_11").delay(450).animate({'opacity':'1','margin-top':'-15px'},sp2);
	$(".vc01_12").delay(500).animate({'opacity':'1','margin-top':'-15px'},sp2);

	$(".v_copy02").css('opacity','0');
	$(".v_copy02")	.delay(1200).animate({'top':'55px','opacity':'1'},500);

	$(".vc03").css('opacity','0');
	$(".vc03").delay(2000).animate({'opacity':'1','margin-top':'0px'},600);

	/*
	$(".vc03_01").delay(1800).animate({'opacity':'1','margin-top':'0px'},sp2);
	$(".vc03_02").delay(1850).animate({'opacity':'1','margin-top':'0px'},sp2);
	$(".vc03_03").delay(1900).animate({'opacity':'1','margin-top':'0px'},sp2);
	$(".vc03_04").delay(1950).animate({'opacity':'1','margin-top':'0px'},sp2);
	$(".vc03_05").delay(2000).animate({'opacity':'1','margin-top':'0px'},sp2);
	$(".vc03_06").delay(2050).animate({'opacity':'1','margin-top':'0px'},sp2);
	$(".vc03_07").delay(2100).animate({'opacity':'1','margin-top':'0px'},sp2);
	$(".vc03_08").delay(2150).animate({'opacity':'1','margin-top':'0px'},sp2);
	$(".vc03_09").delay(2200).animate({'opacity':'1','margin-top':'0px'},sp2);
*/

	/* 메인 비주얼 */
	var mySlider=$(".visual ul").bxSlider({
		mode:"fade", //방향
		speed:500, //속도
		pager:true, //페이징 번호
		moveSlides:1, //이동 갯수
		slideWidth:4000, //너비
		minSlides:1, 
		maxSlides:1,
		auto:true, // 자동
		//autoHover:true, //마우스 오버시 정지
		autoControls:true //제어
	});

	$('.bx-pager-item a').on("click", function(){
		mySlider.startAuto();
	/*
	setTimeout(function(){
			mySlider.startAuto();
		}, 400);
	*/
	});

	$(".prev_btn").on("click",function(){
	mySlider.goToPrevSlide();  
	return false;
	});

	$(".next_btn").on("click",function(){
	mySlider.goToNextSlide();
	return false;
	});


	$(".bx-start").on("click", function(){
		$(this).css("background","url('./images/main/pager_play_o.png') no-repeat 0 10px");
		$(".bx-stop").css("background","url('./images/main/pager_stop.png') no-repeat 0 10px");
	});
	$(".bx-stop").on("click", function(){
		$(this).css("background","url('./images/main/pager_stop_o.png') no-repeat 0 10px");
		$(".bx-start").css("background","url('./images/main/pager_play.png') no-repeat 0 10px");
	});

	$(".bx-pager-link").on("click", function(){
		$(".bx-start").css("background","url('./images/main/pager_play.png') no-repeat 0 10px");
		$(".bx-stop").css("background","url('./images/main/pager_stop_o.png') no-repeat 0 10px");
	});




	var mySlider=$(".photo_rolling").bxSlider({
		mode:"horizontal", //방향
		speed:500, //속도
		pager:true, //페이징 번호
		moveSlides:1, //이동 갯수
		slideWidth:300, //너비
		minSlides:1, 
		maxSlides:1,
		auto:true, // 자동
		autoHover:true, //마우스 오버시 정지
		controls:false //제어
	});


		$(".grid03").on("mouseenter focus", function(){
			$(".paly_on").stop().animate({height:'80px'}),
			$(".paly_off").stop().animate({opacity:'0'});
		});

		$(".grid03").on("mouseleave blur", function(){
			$(".paly_on").stop().animate({height:'0px'}),
			$(".paly_off").stop().animate({opacity:'1'});
		});

/*	timer = setInterval(function(){moveOn();}, 300);

	function moveOn(){
		$(".grid06").on("mouseenter focus", function(){
			$(this).find(".ico").stop()
				.animate({top:'30px'}, 300)
				.animate({top:'40px'}, 300);
		});
	}
*/
		$(".grid06").on("mouseenter focus", function(){
			$(this).find(".ico").stop()
				.animate({top:'35px'}, 300)
				.animate({top:'45px'}, 600)
		});

		$(".grid02").on("mouseenter focus", function(){
			$(this).find(".ico").stop()
				.animate({top:'30px'}, 300)
				.animate({top:'40px'}, 600)
		});


/* 영상 */

	embed = $(".wrap").html();
	$(".wrap").html('');

	$("#movie_start").on("click", function(){
		$(".wrap").html(embed);
		$("#close").css("display","block");
		$(".movie_pop").animate({height:"524px"});
		$(".movie_pop").css("display","block");
		return false;
	});

	$("#close").on("click", function(){
		$(".wrap").html('');
		$("#close").css("display","none");
		$(".movie_pop").animate({height:"0"});
		$(".movie_pop").css("display","none");
		return false;
	});


});

	
	
