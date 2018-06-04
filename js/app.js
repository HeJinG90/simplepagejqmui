;(function(){
	
	
	var app = {
		init : function(){
			app.gotoPage();
		},
		
		gotoPage: function(){
			let url  = window.sessionStorage.getItem('refresgUrl');
			if(url==null){
				common.router(window.href.sub1); //如果sessionStorage没有值  跳转到默认子页
			}else{
				common.router(url);//如果有值  刷新页面依然停留在本页
			}
			
		},
		
		
	}
	app.init();
	
})()
