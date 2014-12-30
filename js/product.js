// JavaScript Document

$.fn.togg = function(){
	return this.each(function(){
		var $this = $(this);
		$this.find("li").click(function(){
			var index = $(this).index();
			$(this).addClass("cur").siblings("li").removeClass("cur");
			if(! $(".sort_three").hasClass("hide")){
					$(".sort_three").addClass("hide");	
			}
			$(".sort_two").removeClass("hide");
			
			if(index != 0){
				$(".sort_two").children("ul").eq(index).removeClass("hide")
			.siblings("ul").addClass("hide");
			}else{
				$(".sort_two").addClass("hide");
				$(".sort_three").addClass("hide");
			}
			return false
		})
	})
}

$.fn.togg_bak = function(){
	return this.each(function(){
		var $this = $(this);
		$this.find("li").click(function(){
			var index = $(this).index();
			$(this).addClass("cur").siblings("li").removeClass("cur");
			if(!index == 0){
				//$(this).addClass("cur").siblings("li").removeClass("cur");	
				$(".sort_three").removeClass("hide").children("ul").eq(index).removeClass("hide")
				.siblings("ul").addClass("hide");
			}else{
				$(".sort_three").addClass("hide");
			}
			return false
		})
	})
}


$.fn.togg_three = function(){
	return this.each(function(){
		var $this = $(this);
		$this.find("li").click(function(){
			var index = $(this).index();
			$(this).addClass("on").siblings("li").removeClass("on");
			return false
		})
	})
}
      

$("#x_li").click(function(){
	var flag = $(".sortBox .sort_pos").eq(1).hasClass("hide"),
	$this = $(this),
	$pos = $(".sortBox .sort_pos").eq(1),
	$tag_i = $this.find("i");
	var _h = $(window).height();
	if(flag){
		$pos.removeClass("hide");
		$this.find("em").removeClass("iconDown").addClass("iconTop");
		$tag_i.removeClass("hide");
		$(".masker").removeClass("hide");
		$(".masker").css({height:_h});
		$("body").addClass("filter_b").css({height:_h});
		//$(".navbar").hide();
	}else{
		$pos.addClass("hide");
		$this.find("em").removeClass("iconTop").addClass("iconDown");
		$tag_i.addClass("hide");
		$(".masker").addClass("hide");
		$("body").css({height:"auto"})
		//$(".navbar").show();
	}
})

/*;(function($){
	$.fn.extend({
		tab:function(){
			var $this = $(this);
			//$tit = $(this).children("li"),
			var _h = $(window).height();
			
			$this.find("li").click(function(){
				var index = $(this).index();
				var flag = $(".sortBox .sort_pos").eq(index).hasClass("hide")
				$(this).addClass("cur").siblings("li").removeClass("cur");
				$(".sortBox .sort_pos").eq(index).removeClass("hide").siblings(".sort_pos").addClass("sort_pos");
				$(".masker").removeClass("hide");
				$(".masker").css({height:_h});
				$("body").addClass("filter_b").css({height:_h});
				if(!flag){
					$(this).removeClass("cur");
					$(".sortBox .sort_pos").eq(index).addClass("hide")
					$(".masker").addClass("hide");
					//$(".masker").css({height:_h});
					$("body").addClass("filter_b").css({height:"auto"});
				}*/
				
				
			
			
				/*if(flag){
					$(".sortBox .sort_pos").addClass("hide");
					$pos.eq($index).removeClass("hide");
					$(this).find("em").removeClass("iconDown").addClass("iconTop");
					$(this).siblings("li").find("em").removeClass("iconTop").addClass("iconDown");
					$(this).find("i").removeClass("hide");
					$(this).siblings("li").find("i").addClass("hide");
					$(".masker").removeClass("hide");
					$(".masker").css({height:_h});
					$("body").addClass("filter_b").css({height:_h});
					$(".navbar").hide();
					all_down();
					
				}else{
					all_up()
					$(".sortBox .sort_pos").addClass("hide")
					$pos.eq($index).removeClass("hide");
					$(this).find("em").removeClass("iconTop").addClass("iconDown");
					$(this).siblings("li").find("em").removeClass("iconDown").addClass("iconTop");
					$(this).find("i").addClass("hide");
					$(this).siblings("li").find("i").removeClass("hide");
					$(".masker").addClass("hide");
					$("body").css({height:"auto"})
					$(".navbar").show();
				}
				function all_down(cur){
					$pos.eq($index).removeClass("hide");
					
					$(".masker").removeClass("hide");
					$(".masker").css({height:_h});
					$("body").addClass("filter_b").css({height:_h});
				}
				
				function all_up(){
					$pos.eq($index).addClass("hide");
					_this.find("em").removeClass("iconTop").addClass("iconDown");
					_this.find("i").addClass("hide");
					$(".masker").addClass("hide");
					$(".masker").css({height:_h});
					$("body").addClass("filter_b").css({height:"auto"});
				}*/
			
/*			})
			//$tag_i.removeClass("hide");
		}
	})
})(jQuery)*/
$("#navlist").tab();
