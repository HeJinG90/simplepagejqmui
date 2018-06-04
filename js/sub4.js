;(function(){
	
	let sub3 = window.href.sub3;
	alert('进入了子页三');
	
	var page = {
		init : function(){
			page.back();
		},
		back : function(){
			$(".back").off('click').on('click',function(){
				common.router(sub3);
			});
		}
		
		
	}
	page.init();
	
})()