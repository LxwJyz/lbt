
/*
 * 首先我们准备把代码这样改:
	function slide(){
 		把下面的所有代码全部粘贴过来
	}
	slide();
 */

/*function slide(){
	var states = [
				{ZIndex: 1,width: 120,height: 150,top: 69,left: 134,ZOpacity: 0.2},
				{ZIndex: 2,width: 130,height: 170,top: 59,left: 0,ZOpacity: 0.5},
				{ZIndex: 3,width: 170,height: 218,top: 35,left: 110,ZOpacity: 0.7},
				{ZIndex: 4,width: 224,height: 288,top: 0,left: 263,ZOpacity: 1},
				{ZIndex: 3,width: 170,height: 218,top: 35,left: 470,ZOpacity: 0.7},
				{ZIndex: 2,width: 130,height: 170,top: 59,left: 620,ZOpacity: 0.5},
				{ZIndex: 1,width: 120,height: 150,top: 69,left: 500,ZOpacity: 0.2}
			 ];
			 
	var lis = $("#box li");
	
	// 让每个 li 对应上面 states 的每个状态
	
	function move(){
		lis.each(function(index,ele){
			var state = states[index];
			$(ele).css("z-index",state.ZIndex).finish().animate(state,1000).find("img").css("opacity",state.ZOpacity);
		})
	}
	// 让 li 从正中间展开
	move();
	
	// 下一张，让轮播图发送偏移
	function next(){
		// 把数组最后一个元素移到数组的第一位
		states.unshift(states.pop());
		move();
	}
	
	// 点击下一张
	$("#box .next").click(function(){
		next();
	})
	
	function prev(){
		states.push(states.shift());
		move();
	}
	
	// 点击上一张
	$("#box .prev").click(function(){
		prev();
	})
	
	var interval = null;
	function autoPlay(){
		interval = setInterval(next,3000)
	}
	
	autoPlay();
	
	// 停止轮播
	lis.add("#box section").hover(function(){
		clearInterval(interval);
	},function(){
		autoPlay();
	});
	
}
// 调用全局变量 slide
slide();
*/


/*
 * 变量的作用域问题
 * 1.全局域[Window]		2.函数域(Function 域)	(3.Block 域)
 * 全局域:从页面被打开之后到页面被关闭之前始终存在的。
 * 函数域:存在于函数调用的一瞬间(也不一定,考虑闭包的存在)
 * 
 * 闭包的理解:
 * 闭包的作用:可以保留函数的作用域(要不然闭包里面的函数 move 就不能使用 slide 函数域里面的变量:lis，states等)
 * 闭包产生的必要条件:函数里面套函数(内层函数要使用外层函数作用域的里面的变量)
 * 
 * 全局变量会产生闭包吗?
 * 不会,因为全局变量存在全局域里。
 */



// 自运行的匿名函数
/*
   (function(){
		alert("自运行的匿名函数")
	})()
	
	$(function(){
		alert("自运行的匿名函数")
	});
 */
(function(){
	var states = [
				{ZIndex: 1,width: 120,height: 150,top: 69,left: 134,ZOpacity: 0.2},
				{ZIndex: 2,width: 130,height: 170,top: 59,left: 0,ZOpacity: 0.5},
				{ZIndex: 3,width: 170,height: 218,top: 35,left: 110,ZOpacity: 0.7},
				{ZIndex: 4,width: 224,height: 288,top: 0,left: 263,ZOpacity: 1},
				{ZIndex: 3,width: 170,height: 218,top: 35,left: 470,ZOpacity: 0.7},
				{ZIndex: 2,width: 130,height: 170,top: 59,left: 620,ZOpacity: 0.5},
				{ZIndex: 1,width: 120,height: 150,top: 69,left: 500,ZOpacity: 0.2}
			 ];
			 
	var lis = $("#box li");
	
	// 让每个 li 对应上面 states 的每个状态
	
	function move(){
		lis.each(function(index,ele){
			var state = states[index];
			$(ele).css("z-index",state.ZIndex).finish().animate(state,1000).find("img").css("opacity",state.ZOpacity);
		})
	}
	// 让 li 从正中间展开
	move();
	
	// 下一张，让轮播图发送偏移
	function next(){
		// 把数组最后一个元素移到数组的第一位
		states.unshift(states.pop());
		move();
	}
	
	// 点击下一张
	$("#box .next").click(function(){
		next();
	})
	
	function prev(){
		states.push(states.shift());
		move();
	}
	
	// 点击上一张
	$("#box .prev").click(function(){
		prev();
	})
	
	var interval = null;
	function autoPlay(){
		interval = setInterval(next,3000)
	}
	
	autoPlay();
	
	// 停止轮播
	lis.add("#box section").hover(function(){
		clearInterval(interval);
	},function(){
		autoPlay();
	});	
})()