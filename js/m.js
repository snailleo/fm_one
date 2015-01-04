var FM = FM || {};

FM.init = {
	myscroll:function(){
		return new iScroll("wrap",{
			useTransition: true,
			onScrollEnd:function(){
				if(this.y < -100){
					$("#gotop").show();	
				}else{
					$("#gotop").hide();	
				}
			}
		});
	},
	slider:function(){
		var bullets = document.getElementById('scroll_position').getElementsByTagName('li');
		return Swipe(document.getElementById('scroll_img'), {
			auto: 3000,
			continuous: true,
			callback: function(pos) {
				var i = bullets.length;
				while (i--) {
					bullets[i].className = ' ';
				}
				bullets[pos].className = 'on';
			}
		});
	},
	menu:function(){
		$('#top_menu span').click(function(e){
			if($("#drop_down").hasClass("active")){
				$("#drop_down").removeClass("active");
			}else{
				$("#drop_down").addClass("active");
			}
			e.stopPropagation();
		});
		$('body').on('click',function(e){
			$("#drop_down").removeClass("active");
		});
		$('.scroll_position_bg').css({
			width:$('#scroll_position').width()
		});
		$(".mask_search").hide();
	},
	bindDOM:function(){
		$("#gotop").on("click",function(){
			FM.init.myscroll().scrollTo(0,0,500);
		})	
	}
},
FM.utils = {
	sear:function(){
		$(".head").addClass("hide");
		$(".mask_search").show();
		$(".masks").removeClass("hide");	
	},
	cancle:function(){
		$(".mask_search").hide();	
		$(".head").removeClass("hide");
		$(".masks").addClass("hide");	
	}
},
window.addEventListener("DOMContentLoaded",FM.init.myscroll(),false);
!function($){
	new FastClick(document.body);
	FM.init.slider();FM.init.menu();FM.init.bindDOM();
	$(".top_right").click(function(){ 
		FM.utils.sear();
	});
	$(".sear_cancle").click(function(){
		FM.utils.cancle();
	})
}(jQuery)
