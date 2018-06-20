;(function(){
	
	let sub2 = window.href.sub2;
	let sub4 = window.href.sub4;
	alert('进入了子页三');
	
	var page = {
		init : function(){
			page.bindButton();
			page.back();
			page.vibration();
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
		},
		vibration : function(){
			navigator.vibrate = navigator.vibrate
               || navigator.webkitVibrate
               || navigator.mozVibrate
               || navigator.msVibrate;

		       if (navigator.vibrate) {
		           // 支持
		           console.log("支持设备震动！");
		       }
		     $(".shock").click(function(){
		         navigator.vibrate([500, 300, 400,300]);
		     });
		}
		
	}
	page.init();
	
	
	
	
})()