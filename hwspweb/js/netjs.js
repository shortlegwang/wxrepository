//var commUrl = "http://localhost:4710";
var  commUrl ="http://www.hlejzy.com";//华绿商城
var commImageBaseUrl = "/Upload_Files/";
var industryId = 1;

(function(netJ){
	netJ.ajax_login_other =function (suburl,options,fn){
		var urlAll = commUrl +"/" + suburl;
//		console.log(urlAll);
		$.ajax({
			url:urlAll,
			type:'POST',
			data:options,
			dataType:"JSON",
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
//				console.log(data)
				fn(data);
			},
			error:function(xhr,type,errorThrown){
//				fn(data);
				console.log("error------------" + xhr + "--" + type +"  " + errorThrown);
			}
		});
		
	}
	
	
	netJ.ajax_login_new = function(suburl,options,fn){
		var urlAll = commUrl +"/" + suburl;
//		console.log(urlAll);
//		console.log(JSON.stringify(options));
		$.ajax({
			url:urlAll,
			data:options,
			dataType:"JSON",
//			dataType:"JSONP",
//			jsonpCallback: "jsonpcallback",
			type:'POST',
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
//				console.log(data)
				fn(data);
			},
			error:function(xhr,type,errorThrown){
//				fn(data);
				console.log("error------------" + xhr + "--" + type +"  " + errorThrown);
			}
		});
	};
	
})(window);
