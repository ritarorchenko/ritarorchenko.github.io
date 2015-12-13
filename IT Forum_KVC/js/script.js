jQuery(function($){
	var devWidth = $(window).width(),
		devHeight = $(window).height(),
		centralHeight = devHeight-136*2,
		marginTimer = (centralHeight-150)/2,
		marginMicrophone = 0,
		ttSwitcherHeight = $('.tt-switcher').height(),
		marginTTswitcher = (devHeight-$('.tt-switcher').height())/2,
		evTheight = $('.event-title').height(),
		evTmargin = (devHeight - $('.event-title').height())/2,
		badgeWidht = (devWidth-560)/2,
		badgeRight = (badgeWidht-397)/2,
		today = new Date(),
		firstDate = new Date(2014,10,02),
		secondDate = new Date(2014,10,16),
		thirdВate = new Date(2014,10,23);

    $('.central').css({'height': centralHeight});
	$('.timerdisplay').css({'margin-top': marginTimer});
	$('.tt-switcher').css({'position': 'relative', 'margin-top': marginTTswitcher});
	$('.event-title').css({'padding-top': evTmargin, 'padding-bottom': evTmargin});
	$('#program2 td p').hide();
	$('.side-badge').width(badgeWidht);
    $('.widgetform').css({"margin-top": (devHeight-400)/2});

	if(badgeRight > 0 ){
        $('#leftbage').css({"margin-right": badgeRight});
    };
    if(badgeWidht < 292 ){
    	$('#rBadge').css({"margin-left": -100});
    };
	if (today < firstDate) {
    	$('#first-cost').toggleClass('curent_cost');
    }
    if ((today >= firstDate)&(today < secondDate)){
    	$('#second-cost').toggleClass('curent_cost');
    }
    if ((today >= secondDate)&(today < thirdВate)){
        $('#third-cost').toggleClass('curent_cost');
    };
    if ( $('.side-badge').width()<397 ){
    	$('.side-badge p').css({"margin-left": 135});
    };
    if ( $('.side-badge').width()<293 ){
    	$('.side-badge p').css({"margin-left": 20});
    };

    /*smooth scrolling*/
    $('a[href*=#]').bind("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 1000);
		e.preventDefault();
	});

    /*switch programs*/
    $('.show').click(function(){
    	var second_screen = $('#program').offset().top;
    	$("html,body").animate({scrollTop:second_screen},0);
    	$('#program article').toggleClass("programhidden");
    	$('#program').toggleClass("background2");
    });

    /*attachment scanning in program*/
    $("#program2 table tr").each(function(){
    	var list = $(this).find('td:last-child');
    	if (list.children('p').length != 0){
    		list.children('b').css({"display": "inline-block"});
    	}
	});

    /*opening attachments in the program*/
    $('#program2 table tbody tr').click(function(){
    	if($(this).hasClass("opened")){
         	$('#program2 table tbody tr').removeClass("opened");
        	$('#program2 table tbody tr td p').slideUp(); 
    	}
    	else{
        	$('#program2 table tbody tr').removeClass("opened");
        	$('#program2 table tbody tr td p').slideUp();
        	$(this).children("td").children("p").slideDown();
        	$(this).toggleClass("opened");
     	}
    });

    /*Switch tabs of halls*/
	$('#program2 li').click(function(){
		var tab_id = $(this).attr('id');
		$('#program2 table').fadeOut(0);
		$('table#'+tab_id).fadeIn(0);
		$('#program2 li').removeClass("nomactiv");
		$(this).toggleClass("nomactiv");
	});

	/*switch tabs of Speakers*/
	$('.tablinks li').click(function(){
		var tab_id = $(this).attr('id');
		$('.tab').fadeOut(0);
		$('.tablinks li').removeClass("tabactiv");
		$(this).toggleClass("tabactiv");
		$('div.'+tab_id).fadeIn(0);
	});

	/*switch tabs Album*/
	$('.albswitcher li').click(function(){
		var tab_id = $(this).attr('id');
		$('div.alb').fadeOut(0);
		$('div#al'+tab_id).fadeIn(0);
  		$('.albswitcher li').removeClass("activalb");
  		$('#gallery a.whitebtn').toggleClass("show_wbt");
  		$(this).toggleClass("activalb");
  		$('div.alb').css({'height': devWidth/4/1.5*2});
	});

	/*galleries generator*/
	function gallery(albN,imgN){
  		var line = '';
  		for (var i = 1; i <= imgN; i++) {
    		line += '<img src="img/alb'+albN+'/'+i+'.jpg" id="'+i+'" />';
    		$('#alb'+albN).html(line);
  		};
	};
    gallery(1,20);
    gallery(2,8);
    $('div.alb').css({'height': $('#alb1 img').width()/1.5*2});

    /*maximize button of full gallery  RU*/
    $('#gallery .whitebtn_ru').click(function(){
		if($('div.alb').hasClass("fullgall")){
			$('div.alb').css({'height': devWidth/4/1.5*2});
			var galleryScreen = $('#gallery').offset().top;
			$("html,body").animate({scrollTop:galleryScreen},1000);
			$(this).text('смотреть все фото');
		}
		else{
			$('div.alb').css({'height': devWidth/4/1.5*5});
			$(this).text('свернуть фото');
		}
		$('div.alb').toggleClass("fullgall");
	});

    /*maximize button of full gallery  UK*/
	$('#gallery .whitebtn_ua').click(function(){
		if($('div.alb').hasClass("fullgall")){
			$('div.alb').css({'height': devWidth/4/1.5*2});
			var galleryScreen = $('#gallery').offset().top;
			$("html,body").animate({scrollTop:galleryScreen},1000);
			$(this).text('переглянути всі фото');
		}
		else{
			$('div.alb').css({'height': devWidth/4/1.5*5});
			$(this).text('згорнути фото');
		}
		$('div.alb').toggleClass("fullgall");
	});
            
	/*opening the gallery by clicking on the picture*/
	$('#gallery img').click(function(){
		$('#prev').fadeIn(400);
		var perent = $(this).parent().attr('id');
		var imgId = $(this).attr('id');
		$('#prev img').attr('src', 'img/'+perent+'/'+imgId+'.jpg');
		$('#prev img').attr('id', imgId);
		$('#prev img').attr('parent', perent);
		var imgHeight = $('#prev img').height();
		$('#prev img').css({"margin-top": (devHeight-imgHeight)/2});
		return parent;
	});

	/*closing the gallery*/
	$('#close').click(function(){
		$('#prev').fadeOut(400);
		$('#widget').fadeOut(400);
	});

	/*track clicks on the dark area in the gallery*/
	$('#prev').mouseup(function (e) {
		var container = $(".imgblock");
		if (container.has(e.target).length === 0){
			$('#prev').fadeOut(400);
		}
	});

	/*next image*/
	$('#next').click(function(){
		var nowId = $('#prev img').attr('id');
		var perent = $('#prev img').attr('parent');
		var counter = document.getElementById(perent).childNodes.length;
		if((nowId>=1)&(nowId<counter)) { 
			nextId = parseInt(nowId)+1; 
		}
		else {
			nextId=1;
		}
		$('#prev img').attr('src', 'img/'+perent+'/'+nextId+'.jpg');
		$('#prev img').attr('id', nextId);
	});

	/*previous image*/
	$('#back').click(function(){
		var nowId = $('#prev img').attr('id');
		var perent = $('#prev img').attr('parent');
		var counter = document.getElementById(perent).childNodes.length;
		if((nowId>1)&(nowId<=counter)) { 
			nextId = parseInt(nowId)-1; 
		}
		else {
			nextId=20;
		}
		$('#prev img').attr('src', 'img/'+perent+'/'+nextId+'.jpg');
		$('#prev img').attr('id', nextId);
	});

	/*action buttons with keyboard*/
	$(document).keyup(function(e) { 
		if (e.which == 27) { $('#close').click(); }  // esc
		if (e.which == 37) { $('#back').click(); }  // ctrl left
		if (e.which == 39) { $('#next').click(); }  // ctrl right
	});

	/*track clicks outside the widget*/
	$('#widget').mouseup(function (e) {
		var container = $(".widgetform");
		if (container.has(e.target).length === 0){
			$('#widget').fadeOut(400);
		}
	});
    
    /*button to open the widget GA*/         
    $('.buy').click(function(){
		$('#widget').fadeIn(400);
		ga('send', 'event', 'Купівля', 'Придбати квиток');
	});

	$(window).scroll(function(){

		/*light menu*/
		$(".content").each(function () {
			var windowTop = $(window).scrollTop();
			var divTop = $(this).offset().top;
			var div_1 = $(this).attr('id');
			if (windowTop > divTop - 90){
				$('.menu').find('li').removeClass('active');
				$('.menu').find('li[class="'+div_1+'"]').toggleClass('active');
			}
			else{
				$('.menu').find('li[class="'+div_1+'"]').removeClass('active');
			};
		});

		/*fixation menu*/
		if( $(this).scrollTop() > $(window).height() ) {
			$("#menu").addClass('fixed');
			$("#about").addClass('fix-menu');
		}
		else {
			$("#menu").removeClass('fixed');
			$("#about").removeClass('fix-menu');
		};

		/*The first program (fixed)*/
		var windowScrollTop = $(window).scrollTop();
		var divOffsetTop = $('#program').offset().top;
		var progHeight = $('#program').height();
		var ts_height = $('.topscreen').height();
		var prog_start = windowScrollTop - divOffsetTop;
		var progEnd = progHeight - devHeight;
		var newProgPosition = divOffsetTop + progEnd;
		if( prog_start < 0 ) {
			$('.topscreen').removeClass('top-s-f');
			$('.topscreen').css({'position': 'relative', 'top': '0'});
			$('.tt-switcher').css({'position': 'relative', 'margin-top': marginTTswitcher});
		}
		else if(( prog_start >= 0 )&&( prog_start < progEnd )) {
			$('.topscreen').addClass('top-s-f');
			$('.tt-switcher').addClass('top-tt');
			$('.tt-switcher').css({'position': 'fixed', 'top': 0, 'right': 0});
		}
		else if( prog_start >= progEnd ) {
			$('.topscreen').removeClass('top-s-f');
			$('.topscreen').css({'position': 'absolute', 'top': newProgPosition});
			$('.tt-switcher').css({'position': 'absolute', 'top': newProgPosition});
		};

		marginMicrophone = ($('.microphone').height()-$('.microphone img').height())/2; /*centering microphone*/
		$('.microphone img').css({'margin-top': marginMicrophone});

		/*time display in the first program*/
		$(".event-title").each(function () {
			var windowTop = $(window).scrollTop();
			var divTop = $(this).offset().top;
			var displayTime = $(this).attr('timeStart')+'\n-\n'+$(this).attr('timeStop');
			if (windowTop > divTop - devHeight*0.5){
				$('.timerdisplay pre').text(displayTime);
			}
		});
		
		/*right switch on the program*/
		$(".event-title").each(function () {
			var windowTop = $(window).scrollTop();
			var divTop = $(this).offset().top;
			var div_1 = $(this).attr('id');
			if (windowTop > divTop - devHeight*0.5){
				$('.tt-switcher').find('li').removeClass('activeTT');
				$('.tt-switcher').find('li[class="'+div_1+'"]').toggleClass('activeTT');
			}
			else{
				$('.tt-switcher').find('li[class="'+div_1+'"]').removeClass('activeTT');
			};
		});

	});

});