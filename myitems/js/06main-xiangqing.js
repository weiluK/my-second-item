$(function () {

    var magnifierConfig = {
        magnifier: "#magnifier1", //最外层的大容器
        width: 452, //承载容器宽
        height: 452, //承载容器高
        moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
        zoom: 5 //缩放比例
    };

    var _magnifier = magnifier(magnifierConfig);



    $(".magnifier-line ul .small-img ").hover(function () {

        $(this).css("border", "2px solid #fb1116").siblings().css("border-color", "#fff")

    }, function () {

        $(this).css("border-style", "none")

    })

    $(".ttop-list ul li").hover(function () {
        let index = $(this).index();

        $(".list-nav").eq(index).stop().slideDown(400, ).siblings("ul").slideUp(800, );
    }, function () {

        $(".list-nav").stop().slideUp(500, );
    })






})