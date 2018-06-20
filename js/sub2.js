;(function(){
	
	
	let sub1 = window.href.sub1;
	let sub3 = window.href.sub3;
	alert('进入了子页二');
	
	var page = {
		data:{
			imgarr:[],
			video:{},
			textarea:''
		},
		init : function(){
			page.bindButton();
			page.back();
			page.showImg();
			page.showVideo();
			page.previewFun();
			page.submitFun();
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
		},
		
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
		showVideo: function(){
			$(".video_input").off('change').on('change',function(event){
				let file = this.files[0];
				let _this = this;
				if(!/video/g.test(file.type))           //判断获取的是否为视频文件  
				    {  
				        alert("请确保文件为视频文件");  
				        return ;  
				    } 
				page.data.video = new FormData();
				page.data.video.append('file', file);
				page.data.video.append('id', "123455");
				var obj_url = window.URL.createObjectURL(file);//获取视频地址
				_this.parentElement.nextElementSibling.src = obj_url;    
				_this.parentElement.nextElementSibling.style.display="block"; 
			})
		},
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
//				var formData = new FormData();
//				formData.append('file', file);
//				$.ajax({
//			            type: 'POST',
//			            data: formData,
//			            cache: false,                      
//					    processData: false,                
//					    contentType: false,    
//			            dataType: "json",
//			            url: 'http://192.168.206.188:8002/ttd/car/uploadFiles',
//			            success:function(data){
//			            	
//			            	console.log(data);
//			            	
//						}
//			            });
//				})
//		},
        
        previewFun: function(){
        	page.setPreviewWrapLeft();
        	//点击预览按钮  显示预览页  与遮罩层 
        	$('#preview').off('click').on('click',function(){
        		page.showPreviewPage();
        		$('.previewWrap').addClass('active');
        		$("#mian").append('<div class="mui-backdrop mui-active" ></div>');
        		//点击遮罩  关闭预览页 删除遮罩
        		$(".mui-active").off('click').on('click',function(){
        			$(this).remove();
        			$('.previewWrap').removeClass('active');
        		})
        	});
        
        
        },
        //根据屏幕设置预览页居中位置
        setPreviewWrapLeft: function(){
        	let dwidth = document.documentElement.getBoundingClientRect().width;
        	let leftwidth = (dwidth-375)/2+'px';
        	document.getElementsByClassName('previewWrap')[0].style.left = leftwidth;
        },
        
        showPreviewPage: function(){
        	let _this = $('#editor .imgDiv img');
        	let imgNum = $('#editor .imgDiv img').length;
        	let html='';
        	let headHtml = '';
        	let foodHtml = '';
        	let bodyHtml = '';
        	headHtml = `<div  class="mui-slider " >
					<div class="mui-slider-group mui-slider-loop">`;
			foodHtml=`</div>
					<div class="mui-slider-indicator">
						<div class="mui-indicator mui-active"></div>
						<div class="mui-indicator"></div>
						<div class="mui-indicator"></div>
						<div class="mui-indicator"></div>
					</div>
				</div>`;		
			for(let i = 0; i<imgNum; i++){
				page.data.imgarr.push(_this[i].currentSrc);
            if(i==0){
            	bodyHtml+=`<div class="mui-slider-item mui-slider-item-duplicate">
							<a href="#">
								<img src="${_this[imgNum-1].currentSrc}">
							</a>
						</div>`;
            }
			bodyHtml +=`<div class="mui-slider-item">
							<a href="#">
								<img src="${_this[i].currentSrc}">
							</a>
						</div>`;
			if(i==imgNum-1){
            	bodyHtml+=`<div class="mui-slider-item mui-slider-item-duplicate">
							<a href="#">
								<img src="${_this[0].currentSrc}">
							</a>
						</div>`;
            }			
        	}
        	html = headHtml+bodyHtml+foodHtml;
        	if($(".videoDiv video").attr('src')!=''){
//      		$(".previewVideo").attr('src',$(".videoDiv video").attr('src'));
//      		$(".previewVideo").css("display","block");
        	html+=`<video class="previewVideo" style="width: 375px;" src="${$(".videoDiv video").attr('src')}" controls autoplay></video >`;
        	}
        	if($("#textareainput").val()!=''){
        	html+=`<div style='color:red;text-align: center;'>${$("#textareainput").val()}</div>`;	
        	page.data.textarea=$("#textareainput").val();
        	}
        	$('.previewWrap').html(html);
        	debugger
		    mui('.mui-slider').slider();
        	$(".mui-slider-group").css('transform','translate3d(-375px, 0px, 0px) translateZ(0px)');
        },
        submitFun: function(){
        	$('#submit').off('click').on('click',function(){
        		console.log(page.data);
        		
//      		$.ajax({
//			            type: 'POST',
//			            data: page.data.video,
//			            cache: false,                      
//					    processData: false,                
//					    contentType: false,    
//			            dataType: "json",
//			            url: 'http://192.168.206.188:8002/ttd/car/uploadFiles',
//			            success:function(data){
//			            	
//			            	console.log(data);
//			            	
//						}
//			            });
        		
        	});
        }
	}
	page.init();
	
})()