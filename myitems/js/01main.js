$(function () {






    // ------------------------------------
    let topListIndex = $(".top-list ul li").length;

    for (var i = 1; i < topListIndex; i++) {
        let topH = `${-12-i*51}`;

        $(".top-list ul li").eq(i).children(".nav_right").css("top", topH + "px");
    }

    $(".top-list ul li span").on("mouseenter", function () {
        $(this).parent().stop().css("background", "#eee").siblings().css("background", "#fff")
        console.log("--------------");

        $(this).siblings().stop().show()
        $(this).parent().siblings().children(".nav_right").stop().hide()

    });
    $(".top-list ul ").on("mouseleave", function () {
        $(".top-list ul li ").children(".nav_right").stop().hide()
    })


    // ------------------------轮播图-----------------------


    let m = 0;


    function ftimer() {
        m++;
        if (m >= 6) {
            m = 0;
        }
        $(".banner-center img").eq(m).show().siblings().hide();
    };

    let timerBanner = setInterval(ftimer, 10000);


    $(".rf>span").on("mouseenter", function () {
        clearInterval(timerBanner);
    });

    $(".rf>span").on("click", function () {


        if ($(this).text() == "<") {
            m--;
            if (m < 0) {
                m = 5;
            }
        } else {
            m++;
            if (m > 5) {
                m = 0;
            }
        }
        $(".banner-center img").eq(m).show().siblings().hide();
    })
    $(".rf>span").on("mouseleave", function () {
        timerBanner = setInterval(ftimer, 10000);
    });






    // ------------------商品列表数据加载--------------



    $.get({
        url: "http://127.0.0.1/weilu/my-second-item/myitems/api/01data.php",

        success(data) {

            let data1 = JSON.parse(data);
            let len = data1.length;
            for (let i = 0; i < len; i++) {
                dataList(data1[i], i);

            }

        }

    });

    function dataList(data, index) {
        let res = "";
        let res1 = "";

        res = `<div class="main-class-0">
               <div class="ht-clss bj01" id="floor1">
                    <ul>
                    <img src="${data.topImg.left}" alt="">          
                    </ul>
                        <div class="cad-b"><a href="" target="_blank">
                            <img src="${data.topImg.right}" title="泰国金枕头榴莲4-5斤" alt="泰国金枕头榴莲4-5斤">
                        </a></div>

                        <div class="cad-a">
                            <a href="" target="_blank">
                            <img src="${data.topImg.center}" title="陕西安仁油桃1.5kg" alt="陕西安仁油桃1.5kg">
                        </a>
                        <a class="m-more" href="" class="more">查看更多&gt;&gt;</a>
                        </div>
                    </div>
                    <div class="products-box bj_bj01"><ul class="li${index}"></ul></div>
                    </div> `;

        $(".main .content").append(res);




        for (var key in data) {


            if (key != "topImg") {
                res1 = `<li>
                            <div class="img"><a href="">
                                <img src="${data[key].src}"  width="180px" height="180px" title="${data[key].title}">
                            </a></div>
                                <p>
                                    <em style="height:30px;"><a href="" title="${data[key].title}">
                                    ${data[key].title}     
                                        </a></em>
                                        <span>￥<i>${data[key].des}</i>
                                        <i class="ri">￥${data[key].udes}</i>
                                        </span>
                                </p>
                            </li>`;
                $(".bj_bj01 ul").eq(index).append(res1);
            }

        }

    }





    $(".fix-left .last").on("click", function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);

    })


    $(".fix-left li:eq(0)").css("background", "red").on("click", function () {
        $('body,html').animate({
            scrollTop: "555px"
        }, 1000);

    });
    $(".fix-left li:eq(1)").css("background", "#76b003").on("click", function () {
        $('body,html').animate({
            scrollTop: "1372px"
        }, 1000);

    });;
    $(".fix-left li:eq(2)").css("background", "#30b633").on("click", function () {
        $('body,html').animate({
            scrollTop: "2285px"
        }, 1000);

    });;
    $(".fix-left li:eq(3)").css("background", "#e0a63b").on("click", function () {
        $('body,html').animate({
            scrollTop: "3221px"
        }, 1000);

    });;
    $(".fix-left li:eq(4)").css("background", "#da9166");
    $(".fix-left li:eq(5)").css("background", "#27beaf");
    $(".fix-left li:eq(6)").css("background", "#64b0c0");
    $(".fix-left li:eq(7)").css("background", "#64b0c0");
    $(".fix-left li:eq(8)").css("background", "#8351ce");
    $(".fix-left li:eq(9)").css("background", "#6494e8");



    $(window).scroll(function (event) {

        let srollY = window.scrollY;


        if (srollY >= 555) {
            $(".fix-left").stop(true, true).show();

        } else {
            $(".fix-left").stop(true, true).hide();
        }


    })

    $(".top-search form").on("click", "span", function () {
        console.log(this);
        let searchTextLen = $(this).prev().val().trim();
        if (searchTextLen.length <= 0) {
            window.location.href = "06main-xiangqing.1.html";
        } else {
            alert("抱歉！ 其他商品正在上架中。");
        }
    })


    $(".my-car").on("click", "span", function () {
        // console.log(this);
        window.location.href = "05shoping.html";
    })
    // ==================================================

    $(".right-quick007 li").hover(function () {
        console.log("----------495555655656565656--------");

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
    // --------------------------------

})