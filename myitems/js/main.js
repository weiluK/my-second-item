$(function () {
    let n = 0

    let timer = setInterval(function () {
        n++;
        if (n >= 4) {
            n = 0;
        }
        $(".imgb img").eq(n).show().siblings().hide();
    }, 5000);




    // ------------------------------------
    let topListIndex = $(".top-list ul li").length;

    for (var i = 1; i < topListIndex; i++) {
        let topH = `${-12-i*51}`;

        $(".top-list ul li").eq(i).children(".nav_right").css("top", topH + "px");
    }

    $(".top-list ul li span").on("mouseenter", function () {

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

        console.log(this);
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
        url: "http://127.0.0.1/weilu/my-second-item/myitems/api/data.php",
        success(data) {

            let data1 = JSON.parse(data);

            for (let i = 0; i < data1.length; i++) {
                dataList(data1[i]);
            }

        }

    });

    function dataList(data) {
        console.log(data);


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
                    <div class="products-box bj_bj01"><ul></ul></div>
                    </div> `;

        $(".main .content").append(res);



        let n = 0;
        for (var key in data) {
            console.log(key);

            if (key == "topImg") {
                console.log(n);
                
            }else{

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
                $(".bj_bj01 ul").append(res1);
                n++;
              

            }

        }

    }











})