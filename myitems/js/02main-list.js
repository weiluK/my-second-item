$(function () {
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

            dataL(data1)
        }

    });

    function dataL(data) {
        let res = "";

        for (const key in data) {


            res = ` <li class="cp-list-ul-li-sel">
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

                    <a class="bth-jrshop" href="">加入购物车</a>

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










})