// (function ($) {
$(function () {


    console.log("---------说明执行这段js代码----------------");

    console.log($(".box").children("include"));


    $(".rightbox  .right-black-box .right-quick007 li").hover(function () {


        console.log(this);
        console.log("----------------执行hover-----------");

        $(this).css("background-color", "rgb(243, 104, 24)");
        $(this).children().children("i").css("background-color", "rgb(243, 104, 24)");
        $(this).children("div").children("span").eq(1).css("background-color", "#fff").css("color", "rgb(243, 104, 24)");
        $(this).children("span").eq(0).stop().show().animate({
            left: "-92px"
        });
    }, function () {
        $(this).css("background-color", "black");
        $(this).children().children("i").css("background-color", "black");
        $(this).children("div").children("span").eq(1).css("background-color", "rgb(243, 104, 24)").css("color", "#fff");;
        $(this).children("span").eq(0).stop().hide().animate({
            left: "-121px"
        });;
    });


    let countNum = 0;
    count();


    function count() {
        let shopcount = JSON.parse(window.localStorage.getItem("shopListCount"));

        for (var i = 0; i < shopcount.length; i++) {

            countNum += shopcount[i] * 1;
        }
        console.log(countNum);
        $(".shopcar").children("span").eq(1).html(countNum);
    }

    console.log("---------说明执行这段js代码---结束----------------");




    // })(jQuery);
})