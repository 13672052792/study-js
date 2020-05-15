$(document).ready(function myjq() {
    var p1 = $("#p1").html("你好").css('color', 'red');
    console.log(p1);
    $("#div1 body").css('background-color', '#bbbbbb');
    $("#div1 >input").css('color', 'green');//子选择器
    $("#div1 input").css('width', '200px');//后代选择器
    $("#p6 + input").css('background-color', '#dddddd');//相邻兄弟选择器
    $("#p1 ~ p").html("p~");//一般兄弟选择器


    //基本筛选选择器
    $("#div1 p:first").css('background-color', '#cccccc');//匹配第一个元素
    $("#div1 p:last").html("匹配最后一个元素");//匹配最后一个元素
    $("#div1 p:even").css('border', '3px groove red');//索引为偶数的元素，从0开始
    $("#div1 p:odd").css('border', '3px groove blue');//索引为奇数的元素，从0开始
    $("#div1 p:not(#p1)").css('height', '50px');//选择所有元素去除不匹配给定的选择器
    $("#div1 p:eq(1)").html("eq(1)");//匹配集合中选择索引值的元素
    //$("p:gt(2)").html("gt(2)");//匹配集合中大于索引值的元素
    //$("p:lt(5)").html("lt(5)");//匹配集合中小于索引值的元素
    $(":header").html("所有标题").css('color', 'red');//选择所有标题


    //内容筛选选择器
    $("#div2 p:contains(11)").css('font-size', '30px').css('color', 'blue');//选择所有包含指定文本的元素
    $(":has(span)").css('font-size', '10px').css('color', 'red');//选择元素中至少包含指定选择器的元素
    $("#div2:parent").css('width', '500px').css('float', 'left');//选择所有含有子元素或者文本的元素
    $("#div2:empty").css('margin-left', '500px');//选择所有没有含有子元素的元素（包括文本节点）


    //可见性筛选选择器
    $(":visible");//选择所有显示的元素
    $(":hidden");//选择所有隐藏的元素


    //属性筛选选择器
    $('[name="divp1"]').css('margin-left', '80px');//选择指定属性是指定值的元素 |=（只包含一个）  ~=（空） ^=(开头) &=(结尾)  *=（包含） ！=（不包含）


    //子元素筛选选择器
    $(":first-child");//选择所有父级元素下的第一个子元素 last-child（末） only-child(仅) nth-child(1)(第1个) nth-last-child(2)(倒数第二)


    //表单元素选择器
    $(":input");//选择所有input元素
    $("input:text");//匹配所有文本框
    $("input:password");//匹配所有密码框
    $("input:button");//匹配所有按钮
    //…………
    //表单对象属性筛选选择器
    $(":enabled");//选取可用的表单元素
    $(":disabled");//选取不可用的表单元素
    $(":checked").removeAttr('checked');//选取被选中的<input>子元素，移除选中属性
    $(":selected");//选取被选中的<option>元素


    //jq的属性与样式之.attr()与.removeAttr()
    $("#input3").attr('value', '添加内容');//添加属性
    $("#input2").attr('value');//获取属性value的值
    console.log($("#input3").attr('value'));
    $("#input2").attr('value', function (i, val) {//i表示数组下标索引值 val表示value属性的值
        console.log('通过function设置' + val);
    });
    $("#input3").removeAttr('value');//删除属性


    //jq .text()与.html()
    //$('[name = "divp1"]').text($("#div1").html());//显示出html方法获取到的内容
    $("h1").text($("#div2").text());//显示出text方法获取到的内容
    console.log($("#p3").text('text改变p3内容'));
    //$("#div1").html('通过.html()方法替换html结构');
    $("h1").text(function(index,text){return '增加新的内容'+text});
    

    //jq .val() 主要是用于处理表单元素的值 
    $("#p2").text($("#div1 input").val());//返回第一个
    $("#p3").text($("#multiple").val());//多个select被选择，返回["imocc", "博客园"]
    $("#input3").val('改变文本框');//选择一个表单，修改value的值


    //jq .addClass() 动态改变类名
    console.log($(".pp").addClass('pp2')) ;
    $(".p5").addClass('pp');
    $("input").addClass(function(index,className){
        if(-1 != className.indexOf('.map')){
            $(this).addClass('pp');
        }
    });

    //jq .removeClass() 删除class
    //$(".p5").removeClass("pp");
    $(".p5").removeClass(function(index,className){
        $(this).next().addClass(className)
        //return 'p5';//删除自己本身的Class
    });
    
    //jq .toggleClass() 添加或删除一个或多个样式类
    $("#div1 .p5").toggleClass("p5 pp");//有删，没有加


    //jq .css()动态的给元素赋予样式属性
    var div1_ = $("#div1").css(['width','height']);//获取尺寸
    $("#div1 h1").text('widht:' + div1_.width +  ' height:' +div1_.height );
    //获取到指定元素的宽度，在回调返回宽度值,并改变宽度
    $("#div1").css('width',function(index,value){
        value = value.split('px');
        return Number(value[0])+200;
    })
    $("#p6").css({'display':'none','color':'yellow'});//设置多个样式

    //jq date数据存储
    //jQuery.data( element, key, value )   //静态接口,存数据
    //jQuery.data( element, key )  //静态接口,取数据   
    //.data( key, value ) //实例接口,存数据
    //.data( key ) //实例接口,取数据
    //jQuery.removeData( element, [name] )
    //.removeData( [name] )
    // $('#input2').click(function() {
    //     var ele = $(this);
    //     //通过$.data方式设置数据
    //     $.data(ele, "a", "data test")
    //     $.data(ele, "b", {
    //         name : "慕课网"
    //     })
    //     //通过$.data方式取出数据
    //     var reset = $.data(ele, "a") + "</br>" + $.data(ele, "b").name;
    //     ele.find('span').append(reset)
    //     console.log(reset);
    // })

    $('#input2').click(function() {
        var ele = $(this);
        //通过.data方式设置数据
        ele.data("a", "data test")
        ele.data("b", {
            name: "慕课网"
        })
        //通过.data方式取出数据
        var reset = ele.data("a") + "</br>" + ele.data("b").name;
        //ele.find('span').append(reset)
        console.log(reset);
    })


});