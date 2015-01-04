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
