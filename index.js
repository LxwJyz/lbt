

// jQuery 出让了 $ 符号的使用权限(也就是说,从这开始 $ 将不再是 jQuery,只能用变量 jQuery)
jQuery.noConflict();

// zySlide() 只要轮播的根标签(任何选择器)
jQuery(".zy-slide").zySlide();
// jQuery("#slide").zySlide();