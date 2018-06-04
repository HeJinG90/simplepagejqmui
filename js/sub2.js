;(function(){
	
	
	let sub1 = window.href.sub1;
	let sub3 = window.href.sub3;
	alert('进入了子页二');
	
	var page = {
		init : function(){
			page.bindButton();
			page.back();
		},
		bindButton : function(){
			$("#gotosub1").off('click').on('click',function(){
				common.router(sub1);
			});
			$("#gotosub3").off('click').on('click',function(){
				common.router(sub3);
			});
		},
		back : function(){
			$(".back").off('click').on('click',function(){
				common.router(sub1);
			});
		}
		
	}
	page.init();
	
})()