//var commUrl = "http://192.168.1.111";
//var commUrltest = "http://192.168.1.176";
//var commUrl = "http://120.24.100.226";
var  commUrl ="http://www.hlejzy.com";//华绿商城
//var commUrl = "http://xtqspx.com";//青山皮鞋
//var commUrl = "http://localhost";
//var commPort = "4712";
//var commPorttest = "10166";
//var commPort = "213"
//var commPort = "888";
var commImageBaseUrl = "/Upload_Files/";
var industryId = 1;

(function(w){
	
	/**
	 * 网络请求数据总接口
	 * @param {Object} reqUrl 请求的url
	 * @param {Object} dataJson 请求的参数
	 * @param {Object} fn  回调函数
	 */
	w.submitData = function(reqUrl, dataJson,fn){
			mui.ajax(reqUrl,
					{
						data:dataJson,
						dataType:"json",
						type:'GET',
						crossDomain:true,
						timeout:10000,
						success:function(e){
							fn(e);	
						},
						error:function(xhr,type,errorThrown){
			//				fn(data);
							console.log("error------------" + xhr + "--" + type +"  " + errorThrown);
						}
					}
			);
			
		}
	
	//+ ":" + commPort 
	w.ajax_login_new = function(suburl,options,fn){
		var urlAll = commUrl +"/" + suburl;
//		console.log(urlAll);
//		console.log(JSON.stringify(options));
		mui.ajax(urlAll,{
			data:options,
			dataType:"json",
			type:'GET',
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
	
	//+ ":" + commPort 
	w.ajax_login_other = function(suburl,options,fn){
		var urlAll = commUrl +"/" + suburl;
//		console.log(urlAll);
		mui.ajax(urlAll,{
			data:options,
			dataType:"json",
			type:'GET',
//			async:false,
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
	
	//+ ":" + commPort 
	w.ajax_login_other_Post = function(suburl,options,fn){
		var urlAll = commUrl +"/" + suburl;
//		console.log(urlAll);
		mui.ajax(urlAll,{
			data:options,
			dataType:"json",
			type:'GET',
//			async:false,
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
//				console.log(data)
				fn(data);
			},
			error:function(xhr,type,errorThrown){
//				fn(data);
			}
		});
	}
	
	/**
	 * 同步请求
	 * @param {Object} suburl
	 * @param {Object} options
	 * @param {Object} ul
	 * @param {Object} pageIn
	 * @param {Object} fn
	 */
	
	//+ ":" + commPort 
	w.ajax_login_other_sync = function(suburl,options,ul,pageIn,fn){
		var urlAll = commUrl +"/" + suburl;
//		console.log(urlAll);
		mui.ajax(urlAll,{
			data:options,
			dataType:"json",
			type:'GET',
			async:false,
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
//				console.log(data)
//				console.log('ul' + ul + 'pagein' + pageIn);
				fn(ul,pageIn,data);
			},
			error:function(xhr,type,errorThrown){
//				fn(data);
			}
		});
	}
	
	//+ ":" + commPort 
	w.ajax_login_other_sync_td = function(suburl,options,ul,pageIn,fn){
		var urlAll = commUrl +"/" + suburl;
//		console.log(urlAll);
		mui.ajax(urlAll,{
			data:options,
			dataType:"json",
			type:'GET',
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
//				console.log(data)
//				console.log('ul' + ul + 'pagein' + pageIn);
				fn(ul,pageIn,data);
			},
			error:function(xhr,type,errorThrown){
//				fn(data);
			}
		});
	}
	
	//+ ":" + commPort 
	w.ajax_login_other_sync_new = function(suburl,options,fn){
		var urlAll = commUrl +"/" + suburl;
//		console.log(urlAll);
		mui.ajax(urlAll,{
			data:options,
			dataType:"json",
			type:'GET',
			async:false,
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
//				console.log(data)
//				console.log('ul' + ul + 'pagein' + pageIn);
				fn(data);
			},
			error:function(xhr,type,errorThrown){
//				fn(data);
			}
		});
	}
	
	//+ ":" + commPort 
	w.ajax_login_other_sync_new_post = function(suburl,options,fn,initParam){
		var urlAll = commUrl +"/" + suburl;
//		console.log(urlAll);
		var initParam = initParam;
		mui.ajax(urlAll,{
			data:options,
			dataType:"json",
			type:'GET',
			async:false,
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
//				console.log(data)
//				console.log('ul' + ul + 'pagein' + pageIn);
				fn(data,initParam);
			},
			error:function(xhr,type,errorThrown){
//				fn(data);
			}
		});
	}
	
	//+ ":" + commPort 
	w.ajax_login_other_Post_category = function(suburl,options,fn,strComm,indxlen){
		var urlAll = commUrl +"/" + suburl;
//		console.log(urlAll);
//		console.log("option==" + JSON.stringify(options));
		mui.ajax(urlAll,{
			data:options,
			dataType:"json",
			type:'GET',
			async:false,
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
//				console.log(data)
				fn(data,strComm,indxlen);
			},
			error:function(xhr,type,errorThrown){
//				fn(data);
//				console.log("error------------" + xhr + "--" + type +"  " + errorThrown);
			}
		});
	}
	
	w.ajax_login_other_Post_category_new = function(suburl,options,fn,strComm,indxlen){
		var urlAll = commUrl +"/" + suburl;
		console.log(urlAll);
		console.log("option==" + JSON.stringify(options));
		mui.ajax(urlAll,{
			data:options,
			dataType:"json",
			type:'GET',
			async:false,
			timeout:10000,//超时时间设置为10秒；
			success:function(data){
//				console.log(data)
				fn(data,strComm,indxlen);
			},
			error:function(xhr,type,errorThrown){
//				fn(data);
				console.log("error------------" + xhr + "--" + type +"  " + errorThrown);
			}
		});
	}
	
	
	w.isMatch = function(srcMatchStr,regxStr){
		if(!regxStr.test(srcMatchStr)){
			return false; //不符合条件
		}
		return true;
	}
	
	//时间处理函数
	w.data_string=function(str) {
		if(str==undefined)return "";
		
	    var d = eval('new ' + str.substr(1, str.length - 2));
	    var ar_date = [d.getFullYear(), d.getMonth() + 1, d.getDate(), d.getHours(), d.getMinutes(), d.getSeconds()];
	    for (var i = 0; i < ar_date.length; i ++) ar_date[i] = dFormat(ar_date[i]);
	    return ar_date.slice(0,3).join('-') + ' ' + ar_date.slice(3).join(':');
	     
	    function dFormat(i) { return i < 10 ? "0" + i.toString() : i; }
	}
	
	
})(window);