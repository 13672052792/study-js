$(document).ready(function(){
    console.log("111");

//鼠标事件
//click与dbclick
    $("div:first p:first").click(function(){
        $(this).append("<p>点击后内部添加p</p>");
    });
    $("div:first>p:eq(1)").click(function(){
        console.log("11");
        $(this).append("<p>点击后内部添加p</p>");
        //$("div:first p:first").click();
    });

//mousedown与mouseup
   $("div:eq(1)").mousedown(function(){
       $(this).css('backgroundColor','red');
   });
   $("div:eq(1)").mouseup(function(){
       $(this).css('background-color','lemonchiffon');
   });

//mousemove
    $("div:eq(2)").append("<p></p>");
    $("#mousemove_").mousemove(111,function(e){
        $("div:eq(2) p:eq(1)").html(e.data);
        $("div:eq(2) p:last").html("<p>鼠标移入x，y轴坐标为："+e.pageX+"/"+e.pageY+"</p>");
    });

//mouseover与mouseout
    var a = 0;
    $("#mouseover_").mouseover(function(){
        $(this).addClass("divcss");
        $("#mouseover_ a").html("冒泡触发次数："+(++a));
    });
    $("#mouseover_").mouseout(function(){
        $("#mouseover_").removeClass("divcss");
    });

//mouseenter与mouseleave
    var i = 0;
    $("#mouseenter_").mouseenter(function(){
        $(this).addClass("divcss");
        $("#mouseenter_ a").html("冒泡触发次数："+(++i));
    });
    $("#mouseenter_").mouseleave(function(){
        $(this).removeClass("divcss");
    });

//hover
    var b = 0;
    $("div:eq(5)").hover(
        function(){
            $(this).css("background", 'red');
            $("div:eq(5) a").html("冒泡触发次数："+(++b));
        },
        function(){
            $(this).css("background", 'lemonchiffon');
        }
    );
    
//focusin/focusout 光标聚焦/失焦



//表单事件
//blur/focus 光标聚焦/失焦（不冒泡）
//change  value内容发生变化触发
//select  文本被选择
//submit  监听提交


//键盘事件
//keydown()/keyup() 键盘按下、放开
//keppress() 触发在文字还没敲进文本框 (获取的内容都是之前输入的，当前输入的获取不到)

//on
    $().on('click',function(){});
    $().on("mouseover mouseout",function(){});
    $().on({mouseover:function(){},mouseout:function(){}});

    function on_(event){
        //console.log("hello"+event.data.name);
    }
    $("body").on("click",{name:"jq"},on_);

    $("body").on('click','p',function(e){
        console.log(e.target.textContent);
    })
//off()移除通过on()绑定的事件

//trigger自定义事件
//triggerHandler自定义事件(不会在DOM树向上冒泡)
});




