;(function(){
	
	
	let sub2 = window.href.sub2;
	alert('进入了子页一');
	
	var page = {
		init : function(){
			page.bindButton();
		},
		bindButton : function(){
			$("#gotosub2").off('click').on('click',function(){
				common.router(sub2);
			});
		}
		
		
	}
	page.init();
	
})()
