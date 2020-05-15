$(document).ready(function () {
    $("#htmlShow").click(function(){
        $.ajax({
            type:"GET",
            url:"file:///C:/Users/Administrator/Desktop/studys/study/jquery/jq5-ajxa/Data/jq.json?",
            dataType:"jsonp",
            jsonp:"callback",
            success:function(data){
                if(data.success){
                    $("div:first ul").html(data.msg);
                }else{
                    $("div:first ul").html("出现错误"+data.msg);
                }
            },
            error:function(jqXHR){
                alert("发生错误"+jqXHR.status);
            }
        })
    });

    //load异步请求数据
    $("#htmlShow").bind('click', function () {
        var $this = $(this);
        $("div:first ul").load("Data/index1.html", function () {
            $this.css('disabled', 'true');
        });
    });

    //getJSON()方法异步加载JSON格式数据
    $("#jsonShow").bind('click', function () {
        var $this = $(this);
        $.getJSON("Data/jq.json", function (data) {
            $this.attr('disabled', 'true');
            $.each(data, function (index, sport) {
                $("#divjson ul").append("<li>" + sport["name"] + "</li>");
            });
        });
    });

    //getScript方法异步加载并执行js文件
    $("#ScriptShow").bind('click', function () {
        var $this = $(this);
        $.getScript("Data/sport_f.js", function (data) {
            $this.attr('disabled', 'true');
        });
    });

    //get()方法以GET方式从服务器获取数据
    $("#getShow").bind("click", function () {
        var $this = $(this);
        $.get('https://www.imooc.com/data/info_f.php?', function (data) {
            $this.attr("disabled", "true");
            $("#divget ul").append("<li>我的名字叫：" + data.name + "</li>");
            $("#divget ul").append("<li>男朋友对我说：" + data.say + "</li>");
        }, "json");
    });

    //post()方法以POST方式从服务器发送数据
    $("#postCheck").bind("click", function () {
        $.post("https://www.imooc.com/data/check_f.php", { num: $("#txtNumber").val() },
            function (data) {
                $("#divpost ul").append("<li>你输入的<b>  "
                    + $("#txtNumber").val() + " </b>是<b> "
                    + data + " </b></li>");
            });
    });

    //使用serialize()方法序列化表单元素值
    $("#serAction").bind("click", function () {
        $("#litest").html($("form").serialize());
    });

    //使用ajax()方法加载服务器数据
    $("#btnCheck").bind("click", function () {
        $.ajax({
            url: "https://www.imooc.com/data/check.php",
            data: { num: $("#txtNumber").val() },
            type: "POST",
            success: function (data) {
                $("ul").append("<li>你输入的<b>  "
                    + $("#txtNumber").val() + " </b>是<b> "
                    + data + " </b></li>");
            }
        });
    });

    //使用ajaxSetup()方法设置全局Ajax默认选项
    $.ajaxSetup({
        type: "POST",
        success: function (data) {
            $("ul").append("<li>你输入的<b>  "
                + $("#txtNumber").val() + " </b>是<b> "
                + data + " </b></li>");
        }
    });
    $("#btnShow_1").bind("click", function () {
        $.ajax({
            data: { num: $("#txtNumber").val() },
            url: "http://www.imooc.com/data/check.php"
        });
    })
    $("#btnShow_2").bind("click", function () {
        $.ajax({
            data: { num: $("#txtNumber").val() },
            url: "http://www.imooc.com/data/check_f.php"
        });
    })

    //使用ajaxStart()和ajaxStop()方法
    $('#divload').ajaxStart(function () {
        $(this).html("正在请求数据...");
    });
    $('#divload').ajaxStop(function () {
        $(this).html("数据请求完成！");
    });
    $("#btnShow").bind("click", function () {
        var $this = $(this);
        $.ajax({
            url: "http://www.imooc.com/data/info_f.php",
            dataType: "json",
            success: function (data) {
                $this.attr("disabled", "true");
                $("ul").append("<li>我的名字叫：" + data.name + "</li>");
                $("ul").append("<li>男朋友对我说：" + data.say + "</li>");
            }
        });
    });
});