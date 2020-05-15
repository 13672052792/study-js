//js 创建动态节点
//querySelector() 方法仅仅返回匹配指定选择器的第一个元素。如果你需要返回所有的元素，请使用 querySelectorAll() 方法替代。
// var left = document.querySelector('.left');
// console.log(left);
// //addEventListener()将事件处理程序附加到元素，而不覆盖现有的事件处理程序。
// document.addEventListener('click',function(){
//     var rightdiv = document.createElement('div');
//     var rightaaron = document.createElement("div");
//     rightdiv.setAttribute('class','right');
//     rightaaron.className = 'aaron';
//     rightaaron.innerHTML = '动态创建div元素节点';
//     rightdiv.appendChild(rightaaron);
//     left.appendChild(rightdiv);
// },false)


//jq 创建动态节点
$(".left").on('click',function(){
    var div = $("<div id='text' class='right div'>动态append添加节点</div>");
    $(".left").append(div);
});


$(".input_").on('click',function(){
    var p_ = $("<p>p内容</p>");
    $(".div2").append(p_);
    console.log("1111");
});


//DOM内部插入append()类似原生的appendChild方法   appendTo() 颠倒了常规的$(A).append(B)的操作,把A追加到B中。
$(".div2").on('click',function(){
    var div3_ = $("<div class='div3'>append动态创建div</div>");
    $(div3_).appendTo(".div2");
});


//DOM内部插入prepend()与prependTo()  与apppend()相反，追加内容在元素前面
$(".rightone").on('click',function(){
    //$(".rightone").prepend($("<div class='right div'>动态prepend添加节点</div>"));
    $("<div>动态prepend添加节点</div>").prependTo($(".rightone"));
});


//DOM外部插入after()向元素的后边添加html代码  before()向元素前边添加html代码
$("#input2").on('click',function(){
    $(".test1").before($("<p>before内容向元素前面添加</p>"));
});
$("#input3").on('click',function(){
    $(".test2").after($("<p>after内容向元素后面添加</p>"));
});


//DOM外部插入insertAfter()与insertBefore() 颠倒了常规的$(A).after(B)的操作,把A追加到B中。
$("#input2").on('click',function(){
    $("<p>insertBefore内容向元素前面添加</p>").insertBefore($(".test1"));
});
$("#input3").on('click',function(){
    $("<p>insertAfter内容向元素后面添加</p>").insertAfter($(".test2"));
});


//DOM节点删除之empty()的基本用法 移除子/后代元素，同样移除元素里的文本。
$(".input4").on('click',function(){
    $(".empty").empty();    
});

//DOM节点删除之remove()的有参用法和无参用法
$(".input4").on('click',function(){
    $(".empty").remove();
    //找到所有p元素中，包含了f的元素
    $("p").remove(":contains('f')");
});


//DOM节点删除之保留数据的删除操作detach()
$(".detach").on('click',function(){
    $(".detach").append($("<p>111111</p>"));
});
var p;
$("#input5").on('click',function(){
    if (!$(".detach").length) return;
    p = $(".detach").detach();
    
});
$(".input5_").on('click',function(){
    console.log("111");
    $(".empty").after(p);
});


//DOM拷贝clone()
$(".input6").on('click',function(){
    $(".div2").after($(".div2").clone(true));//ture用来指定附带的事件与数据给一并克隆了
});


//DOM替换replaceWith()和replaceAll() 会删除与节点相关联的所有数据和事件处理程序
$("#input7").on('click',function(){
    $(".empty").replaceWith($("<div class='right'><p>replaceWith替换</p></div>"));
});

//DOM包裹wrap(),unwrap(),weapAll(),wrapInner()

//jq遍历
//children()
//find()
// parent()
// parents()
// closest()
// next()
// prev()
// siblings()
// add()
// each()
