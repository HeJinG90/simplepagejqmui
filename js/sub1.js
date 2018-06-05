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
		},
		//截取url上参数  var queryUrl = queryURLParameter(url); 使用方法
		queryURLParameter :function (url) {
			url = url.replace(/\*/g,"&");
			var reg = /([^?&=]+)=([^?&=]+)/g, obj = {};
			url.replace(reg, function () {
				obj[arguments[1]] = decodeURI(arguments[2]);
			});
			url = null;
			return obj;
		},
		//转换分秒
		timeChange : function(start,end){
			let time = end - start;
			if(time<0){
				time = 0;
			}
			let times;
			var hours = parseInt((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		    var minutes = parseInt((time % (1000 * 60 * 60)) / (1000 * 60));
		    var seconds = parseInt((time % (1000 * 60)) / 1000);
        	if(hours<10){
            	hours = '0'+hours;
            }
            	times = hours+':';
        	if(minutes<10){
            	minutes = '0'+minutes;
            }
			if(seconds<10){
            	seconds = '0'+seconds;
            }
            times += minutes+':'+seconds;
			return times;
		},
		//时间转换AM PM
		transformTime : function (time){
		    	let timeall = time;
		    	let hour = time.slice(11,13);
		    	let minute = time.slice(14,16)
		    	let times ;
		    	if(hour>=0&&hour<13){
		    		times = timeall.slice(0,16)+'AM';
		    	}else{
		    		hour = hour-12;
		    		if(hour<10){
		    			hour = '0'+hour;
		    		}
		    		times = timeall.slice(0,11)+hour+':'+minute+'PM';
		    	}
		    	return times;
		    }
		
	}
	page.init();
	
})()
