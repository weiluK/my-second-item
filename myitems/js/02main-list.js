$(function () {


    let n = 1;
    let dataAll = [];

    let shopcount = JSON.parse(window.localStorage.getItem("shopListCount"));
    let shopData = JSON.parse(window.localStorage.getItem("shopListData"));
    let arrData = shopData ? shopData : [];
    let arrcount = shopcount ? shopcount : [];





    $(".ttop-list ul li").hover(function () {
        let index = $(this).index();

        $(".list-nav").eq(index).stop().slideDown(800, ).siblings("ul").slideUp(800, );
    }, function () {

        $(".list-nav").stop().slideUp(1000, );
    })


    $(".left-list dl dt").on("click", function () {
        $(this).siblings().stop().toggle(800, );


        $(this).toggleClass("current");
        $(this).siblings().removeClass("current");

    })

    $(".class-selec .lm ").on("click", function () {
        $(".class-selec ul ul").slideToggle(500, );

    })

    $.get({
        url: "../api/02content.php",

        success(data) {

            let data1 = JSON.parse(data);
            // console.log(data1[0]);
            dataAll = data1;
            dataL(data1)
        }

    });

    function dataL(data) {
        let res = "";

        for (const key in data) {


            res = `<li class="cp-list-ul-li-sel">
                <span class="img"><a href=""><img
                            src="${data[key].src}"
                            width="250px"></a></span>

                <span class="price"><em>${data[key].price}</em></span>

                <span class="t"><a href="" target="">${data[key].title}</a>
                    <i>${data[key].ms01}</i></span>

                <p>
                    <font>自 营</font>
                    <em>深圳平湖仓</em>
                    <em>同城速递</em>
                </p>

                <div class="">
                    <div class="Spinner">
                        <a class="DisDe"><i>-</i></a>
                        <input class="Amount" value="1">
                        <a class="Increase"><i>+</i></a>
                    </div>

                    <a class="bth-jrshop">加入购物车</a>

                </div>
            </li>`;
            $(".shangpin-list ul").append(res);


        }



    }


    $(".shangpin-list ul").on("mouseenter", ".cp-list-ul-li-sel", function () {

        $(this).css("border", "1px solid #e7e7e7").siblings().css("border-style", "none");
    })
    $(".shangpin-list ul").on("mouseleave", ".cp-list-ul-li-sel", function () {

        $(this).css("border-style", "none");
    })


    // console.log(arrData);
    // console.log(arrcount);
    $(".shangpin-list ul").on("click", ".Spinner a,.bth-jrshop", function () {

        let indexOfLi = $(this).parent().parent().parent().index();
        // console.log(dataAll);
        let num = $(".shangpin-list ul ").children("li").eq(indexOfLi).children("div").children(".Spinner").children("input").val();
        // console.log(nnp);


        if ($(this).text() == "加入购物车") {
            let indexSHOP = $(this).parent().parent().index();
            let countList = $(this).prev().children("input").val() * 1;

            if (getIndex(arrData, dataAll, indexSHOP) == -1) {
                arrData.push(dataAll[indexSHOP]);
                arrcount.push(countList);
                window.localStorage.setItem("shopListData", JSON.stringify(arrData));
                window.localStorage.setItem("shopListCount", JSON.stringify(arrcount));


            } else {

                arrcount[getIndex(arrData, dataAll, indexSHOP)] += countList;
                window.localStorage.setItem("shopListCount", JSON.stringify(arrcount));
            }

            (function count() {
                let counumber = 0;
                let shopcount = JSON.parse(window.localStorage.getItem("shopListCount"));

                for (var i = 0; i < shopcount.length; i++) {

                    counumber += shopcount[i] * 1;
                }

                $(".shopcar").children("span").eq(1).html(counumber);
            })();

        } else if ($(this).children("i").text() == "+") {
            num++;
            $(this).prev().val(num);
        } else if ($(this).children("i").text() == "-") {
            num--;
            if (num <= 1) {
                num = 1;
            }
            $(this).next().val(num);
        }


    })

    // 去重以及获取索引;
    function getIndex(arrData, dataAll, indexSHOP) {

        let arrDA = [];
        if (arrData.length > 0) {
            for (var h = 0; h < arrData.length; h++) {
                arrDA.push(JSON.stringify(arrData[h]))
            };
            let index = arrDA.indexOf(JSON.stringify(dataAll[indexSHOP]));
            if (index == -1) {
                return -1;
            } else {
                return index;
            }

        } else {
            return -1;
        }

    }








})