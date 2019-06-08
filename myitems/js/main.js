$(function () {
    let n = 0

    let timer = setInterval(function () {
        n++;
        if (n >= 4) {
            n = 0;
        }
        $(".imgb img").eq(n).show().siblings().hide();
    }, 5000);

    let topListIndex = $(".top-list ul li").length;

    for (var i = 1; i < topListIndex; i++) {
        let topH = `${-12-i*51}`;
        console.log(topH);

        $(".top-list ul li").eq(i).children(".nav_right").css("top", topH + "px");
    }

    $(".top-list ul li span").on("mouseenter", function () {

        $(this).siblings().stop().show()
        $(this).parent().siblings().children(".nav_right").stop().hide()

    });
    $(".top-list ul ").on("mouseleave", function () {
        $(".top-list ul li ").children(".nav_right").stop().hide()
    })

})