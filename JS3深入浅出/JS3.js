(function () {
    var type_ = ["Number", "String", "Boolean", "Null", "Undefined", "symbol", "Object(Function,Date,Array...)"];
    var typeof_ = ["typeof", "instanceof", "Object.prototype.toString", "constructor", "duck type"];

    //鼠标移入函数
    function mousemove() {
        mousemove_typediv = document.getElementById("typediv").getElementsByTagName("p");
        var type_a = type_.join("-").split("-", 6);//数组转化字符串并-进行分割成数组返回
        mousemove_typediv[0].innerHTML = "六种原始类型" + type_a + "<br>" + "一种复合类型" + type_[5];
    }
    function mousemove_yinsdiv() {
        mousemove_yins = document.getElementById("yinsdiv").getElementsByTagName("p");
        var yinsdivA = "num+(转字符串)&emsp;num-0(转数字)";
        var yinsdivB = '"37"+7 = "377"&emsp;"37"-7=30';
        mousemove_yins[0].innerHTML = yinsdivA + "<br>" + yinsdivB;
    }
    function mousemove_typeofdiv() {
        mousemove_typeofdiv1 = document.getElementById("typeofdiv").getElementsByTagName("p");
        var typeof_a = typeof_.join("<br>");
        mousemove_typeofdiv1[0].innerHTML = typeof_a;
        //typeof适合基本类型及function检测，遇到null失效。
        //Object.prototype.toString适合内置对象和基元类型，遇到null和undefined失效(IE678等返回[object Object])。
        //instanceof适合自定义对象，也可以用来检测原生对象，在不同iframe和window间检测时失效。
    }


    //鼠标移出函数
    function mouseout() {
        mousemove_typediv[0].innerHTML = "七种数据类型";
    }
    function mouseout_yinsdiv() {
        mousemove_yins[0].innerHTML = "js隐式转换";
    }
    function mouseout_typeofdiv() {
        mousemove_typeofdiv1[0].innerHTML = "类型检测";
    }

    //鼠标点击事件
    function mousedown_type() {
        window.open("https://cloud.tencent.com/developer/article/1197546");
    }
    function mousedown_define() {
        window.open("https://www.cnblogs.com/junjun-001/p/11761252.html");
    }



    //运算符
    function onmousedown_yuns() {
        var dis = document.getElementById("displaydiv");
        if (dis.style.display == "none") {
            dis.style.display = "block";
        } else {
            dis.style.display = "none";
        }
    }
document.getElementsByTagName
    //try catch 抛出异常
    try {
        appplert("输出异常");//执行
    } catch (err) {
        // 有异常就抛出，没有就跳过
        console.log(err);
        //JavaScript 将抛出异常（抛出错误）。实际上会创建带有两个属性的 Error 对象：name 和 message
        document.getElementById("trycatch").innerHTML = err.message;
    } finally {
        console.log("finally");//不管有没有异常最后肯定执行
    }


    //get set方法
    var man = {
        name: 'Bosn',
        weibo: '@bo',
        get age() {
            return new Date().getFullYear() - 1994;
        },
        set age(val) {
            console.log('val ' + val);
        }
    }
    console.log(man.age);//26
    man.age = 100;
    console.log(man.age);//26


    var mantwo = {
        weibo: '@Bosn',
        $age: null,
        get age() {
            if (this.$age == undefined) {
                return new Date().getFullYear() - 1994;
            } else {
                return this.$age;
            }
        },
        set age(val) {
            val = +val;
            //isNaN() 全局对象 函数用于检查其参数是否是非数字值。
            if (!isNaN(val) && val > 0 && val < 150) {
                this.$age = +val;
            } else {
                throw new Error("抛出错误" + val);
            }
        }
    }
    console.log(mantwo.age);//26
    mantwo.age = 100;
    console.log(mantwo.age);//100

    //get/set与原型链
    function protoet() { }
    //Object.defineProperty 需要三个参数（对象（给谁加）,属性名（类型：String）,属性描述（类型：object）） 默认属性（false） writable是否可以被重新赋值  enumerable是否可以被枚举 configurable属性是否可以被删除/重新定义
    Object.defineProperty(protoet.prototype, 'z', { get: function () { return 1; } });
    var protoget = new protoet();
    protoget.name = "wang";
    protoget.age = 26;
    console.log(protoget.z); //1 原函数没有，寻找原型链，找到get方法=1
    console.log(protoget.z = 10);
    console.log(protoget.z); //1 他会走原型get/set方法，赋值原函数失败
    //给原函数添加方式
    Object.defineProperty(protoget, 'z', { value: 100, configurable: true, enumerable: true });
    protoget.z; //100 
    //delete protoget.z;
    protoget.z; //1

    //Object.keys 返回一个数组
    var keys1 = { "name": "wang", "age": 26 }
    console.log(Object.keys(keys1));
    console.log(Object.keys(protoget));

    //对象标签 [[proto]] [[class]] [[extensible]]

    //序列化 json.stringify(对象);
})();
