
// 规定好每张图片处于的位置和状态
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

/*想一想我们的轮播图能封装成插件吗？会产生什么问题?
 * 1.插件中最好不要使用 id 来作为选择器 
 * 		原因:插件是能够被重复使用的,也就是说在同一个页面中可能多次使用造成冲突
 * 2.变量的命名和方法的命名: states、interval、move()、next() 等，用户
 * 		在使用这个插件的时候，可能还会自己创建的 js 文件，也有这样的命名，那么
 * 		久产生冲突的。
 * 3.标签 class 的值的问题:prev、next。这里的 class 太大众化了，谁写标签都
 * 		想命名为 prev、next,势必会冲突
 * 4.插件文件名命名问题: index.js index.css,命名大众化,比如这样修改: jQuery.ZYslide.js
 * 5.
 * 
 */