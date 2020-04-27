// JavaScript Document
var Dianji = 0;
window.onload = function() {
    var buhao = document.getElementById("buhao");
    var hao = document.getElementById("hao");
    buhao.onclick = function() {
        Dianji++;
        if (Dianji == 1) {
            alert("小姐姐在考虑一下呗");
        } else if (Dianji == 2) {
            alert("我是你见过的最帅气善良可爱的男孩");

        } else if (Dianji == 3) {
            alert("必须同意");

        } else if (Dianji == 4) {
            alert("不同意也得同意");

        } else if (Dianji == 5) {
            alert("点到你同意为止");
        } else if (Dianji == 6) {
            alert("房子写你名");
        } else if (Dianji == 7) {
            alert("你同意吗");
            Dianji = 1;
        }

    }
    hao.onclick = function() {
        alert("小姐姐终于同意了，我爱你");
    }


}