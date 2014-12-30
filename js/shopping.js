//shoppingcat
//by 2014 9 21

$('#top_menu em').click(function(){
	//$("#drop_down").addClass("active");
	if($("#drop_down").hasClass("active")){
		$("#drop_down").removeClass("active");
	}else{
		$("#drop_down").addClass("active");
	}
})
//显示其余商品
	$(".list_center").click(function(){
		$(".list_none").show();
	})
	
$(function(){
	$('.goods_list b,.jiesuan b').click(function(){
		var $this = $(this);
		var f = $this.hasClass("on");
		if(f){
			$this.removeClass('on');	
		}else{
			$this.addClass('on');	
		}	
	});
	
	$(".minus,.plus").click(function(){
		var t=$(this).val();
		var $n=$(this).parent().find(".num");
		var $v=$n.val();
		if(t=='-'){
			if($v>1){
				$n.val($v-1);
			}
			else
				$n.val('1');
		}
		else{

			$n.val(parseInt($v)+1);
			
		}
	});
;	
})

var product = (function(){
	var _init = function(){
		bj();
	}	
	var _num = $(".sel_num"),
	_goods = $(".goods_div span"),
	_edit = $(".top_edit a"),
	_money = $(".money"),
	_del = $("#delBtn");
	_buy = $("#buyBtn");
	
	var bj = function(){
		_num.hide();	
		_goods.show();
		_edit.text("编辑");
		_money.show();
		_del.hide();
		_buy.show();
	}
	
	var cl = function(){
		_num.show();	
		_goods.hide();
		_edit.text("完成");
		_money.hide();
		_buy.hide();
		_del.show();
	}
	
	$(".top_edit").on("click",function(){
		var text = $(".top_edit a").text()
		if(text == "完成"){
			bj();	
		}else{
			cl();	
		}	
	})
	
	return {
		init:_init	
	}
})()
product.init();