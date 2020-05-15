//隐藏元素hide
// 显示元素show
// 隐藏显示切换toggle

// slideDown 下拉动画
// slideUp 上卷动画
// slideToggle 切换

// fadeOut 淡出动画
// fadeIn 淡入动画
// fadeToffle 切换
// fadeTo 淡入效果

// animate 自定义动画
$().animate({
    left: 50, 
    width: '50px',   
    opacity: 'show',  
    fontSize: "10em",
}, 500);
// stop 停止动画

// each方法的应用
    jQuery.each(array, callback )
    jQuery.each( object, callback )
    //第一个参数传递的就是一个对象或者数组，第二个是回调函数
    $.each(["Aaron", "数据"], function(index, value) {
   //index是索引,也就是数组的索引
   //value就是数组中的值了
   $.each(["Aaron", "数据"], function(index, value) {
    return false; //停止迭代
});
});
// 查找数组中的索引inArray
    $.inArray(5,[1,2,3,4,5,6,7]) //返回对应的索引：4
    $.inArray(1,[1,2,3,4,1,5,6,7],2)//返回对应的索引：4
// 去空格神器trim
    $.trim($("#").val()).length
// DOM元素的获取get方法
    .get( [index ] )//从0开始索引
// DOM元素获取index方法