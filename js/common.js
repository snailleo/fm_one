//by 2014.9.18

$(function(){
	$('.scroll_position_bg2').css({
		width:$('#scroll_position').width()
	});
	$(".mask_search").hide();
	
});

var slider2 = Swipe(document.getElementById('scroll_img2'), {
	auto: 0,
	continuous: false,
	callback: function(pos) {
		var i = bullets2.length;
		while (i--) {
			bullets2[i].className = ' ';
		}
		bullets2[pos].className = 'on';
	}
});
var bullets2 = document.getElementById('scroll_position2').getElementsByTagName('li');

$(function(){
	$('#top_menu span').click(function(e){
		//$("#drop_down").addClass("active");
		if($("#drop_down").hasClass("active")){
			$("#drop_down").removeClass("active");
		}else{
			$("#drop_down").addClass("active");
		}
		e.stopPropagation();
	})
	$('body').on('click',function(e){
		$("#drop_down").removeClass("active");
	})
	//搜索
	$(".top_right").click(function(){ 
		$(".head").addClass("hide");
		$(".mask_search").show();
		$(".masks").removeClass("hide");
		
	})
	$(".sear_cancle").click(function(){
		$(".mask_search").hide();	
		$(".head").removeClass("hide");
		$(".masks").addClass("hide");
	})
})