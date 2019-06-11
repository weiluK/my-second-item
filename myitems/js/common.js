$(function () {
    let n = 0

    let timer = setInterval(function () {
        n++;
        if (n >= 4) {
            n = 0;
        }
        $(".imgb img").eq(n).show().siblings().hide();
    }, 5000);





})