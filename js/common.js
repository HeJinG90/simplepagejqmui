var common = {
	data: {
		
	},
	router:function(url){
        
        $.ajax({
            type: 'GET',
            url: url,
            success:function(data){
            	
            	window.sessionStorage.setItem("refresgUrl",url); 
            	$('#app').html(data)
	
			}
        });
        
	}
	
	
}
