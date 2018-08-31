!(function($){
	$.fn.rmImg = function(){
		let picNum = 7;
		var index = 1;
		$(document).ready(function(){
			getpics();
			$("body").bind("click",function(Oevent){
				if(window.event) Oevent = window.event;
				var target = Oevent.target || Oevent.srcElement;
				if(target.nodeName.toLowerCase() == "img"){
					var id = ~~$(target).attr("index");
					moveAnyway(id,target);
				}
			})
		})
		var pics = function(){
			this.x = getRandomNum(100,600);
			this.y = getRandomNum(100,600);
			this.arc = "rotate("+getRandomNum(10,100)+"deg)";
		}
		function getRandomNum(x,y){
			return Math.random()*(y-x);
		}
		function getpics(){
			for(var i=1;i<picNum;i++){
				var pic = new pics();
				var img = $("<img>");
				img.attr("src","img/"+i+".jpg");
				img.css({
					"position":"absolute",
					"left":pic.x+"px",
					"top":pic.y+"px",
					"transform":pic.arc
				});
				img.attr("index",i);
				$("body").append(img);
			}
		}
		function moveCenter(tar){
			$(tar).animate({
				"position":"absolute",
				"top":$(window).innerHeight()/2 - $(tar).height()/2 + "px",
				"left":$(window).innerWidth()/2 - $(tar).width()/2 + "px",
				"z-index":index++
			},500,function(){
				$(this).css({"transform":"rotate(0deg)"});
			});
		}
		function moveAnyway(id,tar){
			var arr = [];
			for(var j = 0;j<picNum;j++){
				arr.push(j);
			}
			arr.splice(id,1);
			for(var i=0;i<arr.length;i++){
				var pic = new pics();
				$("img").eq(arr[i]).animate({
					"position":"absolute",
					"left":pic.x+"px",
					"top":pic.y+"px"
				},800,function(){
					moveCenter(tar);
					$(this).css({"transform":pic.arc})
				})
			}
		}
	}
})(jQuery)
