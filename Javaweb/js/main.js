window.onresize = function() {//窗口变化
    console.log(this.screen.width);
    console.log(this.screen.height);
}
function changeSpan(num){
    //技能图标样式的改变
    var a = document.getElementsByClassName("current");
    a[0].setAttribute('class','');
    var cs = document.getElementsByName("ck");
    console.log(cs[num].getAttribute("count"));
    cs[num].setAttribute('class','current'); 
    console.log(cs[num]);
    //技能图标样式的改变
}