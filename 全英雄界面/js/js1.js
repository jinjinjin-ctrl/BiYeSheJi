xianshi();
 function xianshi() {
var dis = document.getElementsByName("display");
var name = document.getElementsByName("ck");
for (let i = 0; i < name.length; i++) {
    name[i].onclick = function () {
        //英雄职业选择样式改变
        var a = document.getElementsByClassName("current");
        a[0].setAttribute('class','');
        var cs = document.getElementsByName("ck");
        // console.log(cs[num].getAttribute("count"));
        cs[i].setAttribute('class','current'); 
        // console.log(cs[i]);
        //英雄职业选择样式改变



        var all =document.getElementsByClassName("xianshi");
        all[0].setAttribute('style','display:none');
        all[0].setAttribute('class','');
        dis[i].className += " xianshi";
        dis[i].setAttribute('Style','display: ');
    //    console.log(dis[i]);
    }
    // dis[num].setAttribute('class','all')
}
}
// function u(){
    var temp = new Array;
    var encodeStr= new Array;
    var url= new Array;
    // for (let i = 0; i < $(".a").length - 1; i++) {
    //     temp[i] = $(".pa")[i].textContent;
    //     encodeStr[i] = encodeURI(temp[i]);
    //     url[i] = "/page/index.jsp?Hero_name=" + encodeStr[i];
    //     // $(".a")[i].href = url[i];
    //     $(".a")[i].setAttribute("href",url[i]);
    // }
     for (let i = 0; i < $(".a").length; i++) {
        temp[i] = $(".a")[i].href;
        encodeStr[i] = encodeURI(temp[i]);
        $(".a")[i].setAttribute("href",encodeStr[i]);
    }
// }
