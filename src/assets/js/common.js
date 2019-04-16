/**
 * 纯原生JS-rem
 * @return {[type]} [description]
 */
function resize() {
    window.remFontSize = document.documentElement.clientWidth / 10;
    document.documentElement.style.fontSize = document.documentElement.clientWidth / 10 + "px";
    var oP = document.createElement("p");
    oP.id = "remset";
    oP.style.width = "10rem";
    document.getElementsByTagName("body")[0].appendChild(oP);
    var realrem= document.getElementById("remset").clientWidth / 10;
    var rem=document.documentElement.clientWidth /10;
    if(realrem!=rem)
    {
        document.getElementsByTagName("html")[0].style.fontSize = (rem*rem)/realrem+"px";
    }
    oP.remove();
}
var b = null;
window.addEventListener("resize", function() {
    clearTimeout(b),
        b = setTimeout(resize, 300)
}, !1);
resize();

try {
    localStorage.setItem('isPrivateMode', '1');
    localStorage.removeItem('isPrivateMode');
    window.isPrivateMode = false;
} catch(e) {
    window.isPrivateMode = true;
}

/* 获取浏览器参数
 * 返回示例
 * getQueryString("phone")=1354455445
 *
 */
export function getQueryString(name) {
    if (window.location.href.indexOf("?") != window.location.href.lastIndexOf("?"))
        var urls = window.location.href.replace(/\?/g, "&").replace(/^.*?&/, "")
    else
        var urls = window.location.href.replace(/^.*\?/, "");
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = ("?" + urls).substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}