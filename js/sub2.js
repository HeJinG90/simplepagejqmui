;(function(){
	
	
//	let sub1 = window.href.sub1;
//	let sub3 = window.href.sub3;
//	alert('进入了子页二');
	
	var page = {
		init : function(){
//			page.bindButton();
//			page.back();
			page.showImg();
			page.showVideo();
		},
//		bindButton : function(){
//			$("#gotosub1").off('click').on('click',function(){
//				common.router(sub1);
//			});
//			$("#gotosub3").off('click').on('click',function(){
//				common.router(sub3);
//			});
//		},
//		back : function(){
//			$(".back").off('click').on('click',function(){
//				common.router(sub1);
//			});
//		},
		
		showImg: function(){
			$(".img_input").off('change').on('change',function(event){
				let _this  = this;
				let file = this.files[0];
				
				if(!/image/g.test(file.type))           //判断获取的是否为图片文件  
				    {  
				        alert("请确保文件为图像文件");  
				        return ;  
				    } 
				     var reader=new FileReader(); 
				    reader.addEventListener("load", function () {
					    _this.nextElementSibling.src = reader.result;
					  }, false);
				     
    				reader.readAsDataURL(file); 
    					
				
			})
		},
//		showVideo: function(){
//			$(".video_input").off('change').on('change',function(event){
//				var video = document.getElementById('vidoe');
//				let file = this.files[0];
//				let _this = this;
//				if(!/video/g.test(file.type))           //判断获取的是否为视频文件  
//				    {  
//				        alert("请确保文件为视频文件");  
//				        return ;  
//				    } 
//				var obj_url = window.URL.createObjectURL(file);//获取视频地址
//				_this.parentElement.nextElementSibling.src = obj_url;    
//				_this.parentElement.nextElementSibling.style.display="block"; 
//			})
//		},
//		showImg: function(){
//			$(".img_input").off('change').on('change',function(event){
//				let _this  = this;
//				let file = this.files[0];
//				
//				if(!/image/g.test(file.type))           //判断获取的是否为图片文件  
//				    {  
//				        alert("请确保文件为图像文件");  
//				        return ;  
//				    } 
//				    var formData = new FormData();
//					
//				    var reader=new FileReader();
//					reader.addEventListener("load", function () {
//					  formData.append('img', reader.result);
//					}, false);
//				     
//  				reader.readAsDataURL(file); 	
//					$.ajax({
//				            type: 'POST',
//				            data: formData,
//				            cache: false,                      
//						    processData: false,                
//						    contentType: false,    
//				            dataType: "json",
//				            url: 'http://192.168.206.188:8002/ttd/car/uploadFiles',
//				            success:function(data){
//				            	
//				            	data;
//				            	
//							}
//				            });
//			})
//		},
		showVideo: function(){
			$(".video_input").off('change').on('change',function(event){
				var video = document.getElementById('vidoe');
				let file = this.files[0];
				let _this = this;
				if(!/video/g.test(file.type))           //判断获取的是否为视频文件  
				    {  
				        alert("请确保文件为视频文件");  
				        return ;  
				    } 
				var formData = new FormData();
				formData.append('file', file);
				$.ajax({
			            type: 'POST',
			            data: formData,
			            cache: false,                      
					    processData: false,                
					    contentType: false,    
			            dataType: "json",
			            url: 'http://192.168.206.188:8002/ttd/car/uploadFiles',
			            success:function(data){
			            	
			            	console.log(data);
			            	
						}
			            });
				})
		},
	}
	page.init();
	
})()