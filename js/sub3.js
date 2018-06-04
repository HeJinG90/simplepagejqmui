;(function(){
	
	let sub2 = window.href.sub2;
	let sub4 = window.href.sub4;
	alert('进入了子页三');
	
	var page = {
		init : function(){
			page.bindButton();
			page.back();
		},
		bindButton : function(){
			$("#gotosub4").off('click').on('click',function(){
				common.router(sub4);
			});
		},
		back : function(){
			$(".back").off('click').on('click',function(){
				common.router(sub2);
			});
		}
		
		
	}
	page.init();
	
})()