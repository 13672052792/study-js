//直接在网页中输出内容
document.write('这里是javascript---' + '<br>');
//通过变量向网页输出内容
var mystr = "变量输出javascript";
document.write(mystr + "<br>");

//alert消息对话框
function alertone() {
	alert("这是alert消息对话框");
	alert("按顺序弹出");
	alert(mystr);
}
//获取input标签
var mychar = document.getElementsByTagName("input");
//confirm 消息对话框
function confirmone() {
	var mystrt = confirm("这是javascript confirm消息对话框吗");
	if(mystrt == true) {
		document.getElementById("confirmid").innerHTML = "没错。这就是confirm";
	} else {
		document.getElementById("confirmid").innerHTML = "要再学习哦";
	}
}
//取消样式
function confirmtwo() {
	var confirmMy = confirm("确定要取消样式？");
	if(confirmMy == true) {
		for(var i = 0; i < mychar.length; i++) {
			mychar[i].style.color = null;
			mychar[i].style.backgroundColor = null;
			mychar[i].style.width = null;
			mychar[i].style.fontSize = null;
		}
		document.getElementById("confirmid").innerHTML = "已取消样式";
	} else {
		document.getElementById("confirmid").innerHTML = "没有取消";
	}
}
//控制类名className
function classNameone() {
	var p1 = document.getElementById("confirmid");
	p1.className = "two";
	alert(p1.className);
}

//prompt 消息对话框（包含一个确定按钮、取消按钮与一个文本输入框）
function promptone() {
	var name = prompt("你正在学习的的输入框类型");
	var namel = "prompt";
	if(name == namel) {
		alert("你正在学习" + name);
	} else {
		alert("回答错误");
	}
}

//打开新窗口 window.open([URL], [窗口名称], [参数字符串])
function openWindow() {
	var closeone = window.open('file:///C:/Users/daiming/Desktop/js/1/index.html', '_black', 'width=300,height=200,menubar=no');
	//关闭窗口window.close()
	var closeone = window.open('http://www.baidu.com');
	closeone.close();
}

function openWindows() {
	var a = confirm("确定要打开新窗口吗");
	if(a == true) {
		var b = prompt("请输入你要打开的网址");
		if(b != null) {
			var c = 'http://' + b;
			window.open(c, '_black', 'width=400,height=500')
		} else {
			alert("请输入网址");
		}
	} else {
		document.getElementById("confirmid").innerHTML = "你没有选择打开新窗口";
	}
}
/*改变html样式*/
function styleonc() {
	for(var i = 0; i < mychar.length; i++) {
		mychar[i].style.color = "red";
		mychar[i].style.backgroundColor = "#ccc";
		mychar[i].style.width = "300px";
		mychar[i].style.fontSize = "20px";
	}
}
for(var i = 0; i < mychar.length; i++) {
	mychar[i].style.color = "red";
	mychar[i].style.backgroundColor = "#ccc";
	mychar[i].style.width = "300px";
	mychar[i].style.fontSize = "20px";
}
/*隐藏内容*/
function displaynone() {
	for(var i = 0; i < mychar.length - 1; i++) {
		mychar[i].style.display = "none";
	}
}

/*显示内容*/
function displayblock() {
	for(var i = 0; i < mychar.length; i++) {
		mychar[i].style.display = "block";
	}
}