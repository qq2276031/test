
$(function(){
	$(".nav-right li").hover(function(){
		$(this).mouseover(function(){	
			$(this).children().eq(1).show();
		});
	},function(){
		$(this).mouseout(function(){	
			$(this).children().eq(1).hide();
		});
	})


	//中间部分banner 
	$(" .banner11-l ul li").mouseenter(function(){
		$(this).css("background","#fff").siblings("background","");

	}).mouseleave(function(){
		$(this).css("background","");
	});

	//商品分类 二级菜单
	$(".banner11-l ul li").hover(function(){
		$(".banner11-cont").show();
	},function(){
		$(".banner11-cont").hide();
	});

	$(".banner11-cont").hover(function(){
		$(".banner11-cont").show();
	},function(){
		$(".banner11-cont").hide();
	});



	// 轮播图
	var i =1;
	arrbg = ["#DF0A20","#e8e8e8","#700A06","#AF0C1F","#C10B17","#e8e8e8"]
	var timer = setInterval(play,3000);
	function play() {
		if(i>5){
			i=0;
		}
		imgRun(i)
		spanRun(i);
		$(".banner").css("background",arrbg[i]);
		// console.log(arrbg[i]);
		i++;
	}
	function imgRun(m) {
		$(".imglist img").eq(m).addClass('active').parent().siblings().children().removeClass('active');
	}
	function spanRun(m){
		$(".spanlist span").eq(m).addClass('active').siblings().removeClass('active');
	}
	$(".banner11-c").mouseenter(function(){
		clearInterval(timer);
		$('.spanlist span').click(function(){
				  $('.spanlist span').eq($(this).index()).addClass('active').siblings().removeClass('active');
				 $('.imglist img').eq($(this).index()).addClass('active').parent().siblings().children().removeClass('active');
				 i=$(this).index()+1;
				   i=$(this).index()
				  $(".banner").css("background",arrbg[i]);
				
		})
	}).mouseleave(function(){
		timer=setInterval(play,3000);
	});	

	//右侧边栏
	// 点击我的资产 弹出资产框
	var tClose =true;
	$(".zichan").click(function(){
		if(tClose){
			$(".ri-ce").animate({'right':'0px'});
			tClose=false;
		}
		else {
			$(".ri-ce").animate({'right':'-235px'});
			tClose=true;
		}
	})
	$(".blank-tip").click(function(){
		$(".ri-ce").animate({'right':'-235px'});
	});

	// 鼠标滑过小图标

	$(".right-table .sf").mouseenter(function(){
		console.log(1);
		if(!$(this).children('.nav-tip').is(':animated')){	
				$(this).addClass('addcolor').children('.nav-tip').show();
			}
		}).mouseleave(function(){
			   $(this).removeClass('addcolor').children('.nav-tip').hide();
 
		  });

	//鼠标滑过购物车
	$(".right-table .shopcar").mouseenter(function(){
		$(this).find(".cars-info").css("backgroundImage","url(./images/car1.png)"); 
		$(this).addClass("addcolor")
	}).mouseleave(function(){
		$(this).find(".cars-info").css("backgroundImage","url(./images/car.png)"); 
		$(this).removeClass("addcolor")
	});

	//鼠标滑过二维码
	$(".right-table .erweima").mouseenter(function(){
		$(this).find(".sao-pic").show();
	}).mouseleave(function(){
		$(this).find(".sao-pic").hide();
	});

	// 右侧边变有个点击返回到顶部的事件
		 $('.top').click(function(){
			 $('body,html').animate({'scrollTop':'0px'},1000);
		 });
		  $('.na-top').click(function(){
			 $('body,html').animate({'scrollTop':'0px'},1000);
		 });
	//直播 滚动操作
	$(".zuo,.you").click(function(){
		var left=$('.ul-pic').position().left;
		if(left==0) {
			$('.ul-pic').animate({'left':'-488px'});
		}else if(left==-488){
			$('.ul-pic').animate({'left':"0px"})
		}
		$(".zuo").toggle();
		$(".you").toggle();
	});
	//直播里滑动操作 
	$(".ul-pic li").mouseenter(function(){
		c =$(this).index()
		$(".zb-play img").css("display","none");
		$(".zb-play img").eq(c).css("display","block");
	})
	//直播换图操作
		$(function(){
    	var a=0;
    	$('.refresh').click(function () {
        	if(a>=1){
           	 a=-1;
        	}
        	a++;
        $('.pp-info ul').eq(a-1).css('display','none');
       	$('.pp-info ul').eq(a).css('display','block');
       	$(".pp-info li").css("border-right","none");
    	});
	});

	//直播里换一批操作
		$(".refresh").click(function() {
			 c=$(".pp-info ul").index();
			 $(".pp-info .next-pic").css("display","none");
			 $(".pp-info .next-pic").eq(c).css("display","block");
		});

	//左侧边栏 
	//当鼠标滑过侧边楼层出现效果
		$(function(){
			$('.side a').hover(
				function(){
					$(this).addClass('current');
				},function(){
					$(this).removeClass('current');
				}).click(function(){
					changeColor($(this).index());
					$('body').animate({
						'scrollTop':getScroll($(this).index())
					},100)
				});
		})
		function changeColor(n){
			$('.side a').eq(n).css({
				'background':'red',
				'color':'white'
			}).siblings().css({
				'background':'',
				'color':''
			})
		}

		// 获取楼层距离顶部的距离
		$(function() {
			$(document).scroll(function(){
				var num =$(this).scrollTop()
				//console.log(num)
				if(num>=5978){
					changeColor(7);
				}else if(num>=5170){
					changeColor(6);
				}else if(num>=4568){
					changeColor(5);
				}else if(num>=4078){
					changeColor(4);
				}else if(num>3478){
					changeColor(3);
				}else if(num>=3000){
					changeColor(2);
				}else if(num>=2400){
					changeColor(1);
				}else if(num>=900){
					//侧边栏 顶部搜索框显示
					$(".left-table").fadeIn();
					$(".show").slideDown("slow",function(){
						$('.top-search').show();
					});
					changeColor(0);
				}else {
					//小于第一层则隐藏侧边栏  顶部搜索框
					$('.left-table').fadeOut();
					$(".show").slideUp("slow",function(){
						$('.top-search').hide();
					});
				}


			})
		})

		 function getScroll(n){
			switch(n){
				case 0:return 1900;break;
				case 1:return 2400;break;
				case 2:return 3000;break;
				case 3:return 3478;break;
				case 4:return 4078;break;			
				case 5:return 4568;break;
				case 6:return 5170;break;
				case 7:return 5978;break;
			}
		}
		// 左侧边变有个点击返回到顶部的事件
		 $('.dd-top').click(function(){
			 $('body,html').animate({'scrollTop':'0px'},0);
		 });

		 //给你的专属活动图片加上opacity
		 $(".area-tupian a").hover(function(){
		 	$("img").delay("100").finish();
		 	$(this).animate({"opacity":"0.7"},300).delay("300").animate({"opacity":"1"},300);
		 })

		 //给楼层图片加上opacity
		 $(".beaut-l").hover(function(){
		 	$("img").delay("100").finish();
		 	$(this).animate({"opacity":"0.7"},100).delay("100").animate({"opacity":"1"},100);
		 });

		 //给品牌旗舰店图片加上opacity
		 $(".shop-list li").hover(function(){
		 	$("img").delay("100").finish();
		 	$(this).animate({"opacity":"0.7"},300).delay("300").animate({"opacity":"1"},300);
		 });
		 //给猜你喜欢 图片加上opacity
		 $(".like-pic").hover(function(){
		 	$("img").delay("100").finish();
		 	$(this).animate({"opacity":"0.7"},300).delay("300").animate({"opacity":"1"},300);
		 })




  



	





































});

