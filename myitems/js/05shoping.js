$(function () {
    let shopcount = JSON.parse(window.localStorage.getItem("shopListCount"));
    let shopData = JSON.parse(window.localStorage.getItem("shopListData"));

    let ischeck = "checked";

    let res = "";

    creatLi(shopData, shopcount, ischeck);

    function creatLi(shopData, shopcount, ischeck) {
        let lenShop = shopData.length;
        let totalCount = 0;
        let totalMoney = 0;
        $(".creat-ul").html(` <ul class="cart-nr-right">  </ul>`);
        let price = 0;

        for (var i = 0; i < lenShop; i++) {

            price = shopData[i].price.trim().slice(1, shopData[i].price.length - 1) * 1 * shopcount[i];

            res = `<li>
        <div class="cart-x">
            <input name="chk_goods" type="checkbox" ${ischeck} value="29e8d3677ef34bfab2a4" class="cart-checkbox-x fl">
        </div>
        <div class="cart-nr-li-line">
            <div class="cart-nr-li">
                <div class="cart-nr-li-img">
                    <img src="${shopData[i].src}" title="${shopData[i].title}">
                </div>
                <div class="cart-nr-li-wz">
                    <a href="">${shopData[i].title}</a>
                </div>
            </div>
        </div>
        <div class="li-price red">${shopData[i].price}</div>
        <div class="li-num">
            <div class="cart-li-num">
                <em><input type="button" class="cart-li-num-lf" ></em> 
                <em class="cart-li-num-c" id="29e8d3677ef34bfab2a4">${shopcount[i]}</em> 
                <em><input type="button" class="cart-li-num-ri"></em>
            </div>
        </div>
        <div class="li-sub red">${ price.toFixed(2)}</div>
        <div class="li-w">1.8kg</div>
        <div class="cart-nr-li-hd-sc">
            <a >移入收藏</a>
        </div>
        <div class="cart-nr-li-hd-de">
            <a  >删除</a>
        </div>
    </li>`;

            $(".cart-nr-right").append(res);

            totalCount += shopcount[i];
            totalMoney += shopData[i].price.trim().slice(1, shopData[0].price.length - 1) * 1 * shopcount[i];
        }

        $(".cart-nr-js-ri").children("em").eq(6).html(totalCount);
        $(".cart-nr-js-ri").children("em").eq(7).html(`￥${totalMoney.toFixed(2)}`);
        $(".cart-nr-zj-js").html(`￥${totalMoney.toFixed(2)}`);
        $(".my-car p").html(totalCount);
        $(".value-In-Car").html(totalCount);
    }


    $(".creat-ul").on("click", ".cart-li-num-lf,.cart-li-num-ri", function () {

        // console.log($(this).attr("class"));

        let indexOfList = $(this).parent().parent().parent().parent().index();

        if ($(this).attr("class") == "cart-li-num-ri") {
            shopcount[indexOfList]++;
            window.localStorage.setItem("shopListCount", JSON.stringify(shopcount));
            creatLi(shopData, shopcount);
        } else if ($(this).attr("class") == "cart-li-num-lf") {
            shopcount[indexOfList]--;
            if (shopcount[indexOfList] <= 0) {
                shopcount[indexOfList] = 0;
            }

            window.localStorage.setItem("shopListCount", JSON.stringify(shopcount));
            creatLi(shopData, shopcount, ischeck);
        }


    })


    $(".creat-ul").on("click", ".cart-nr-li-hd-de", function () {


        let delIndex = $(this).parent().index()
        // localStorage.removeItem('userinfo');

        // window.localStorage.removeItem(shopData[delIndex]);
        // window.localStorage.removeItem(shopcount[delIndex]);
        shopData.splice(delIndex, 1);
        shopcount.splice(delIndex, 1);
        window.localStorage.setItem("shopListCount", JSON.stringify(shopcount));
        window.localStorage.setItem("shopListData", JSON.stringify(shopData));
        creatLi(shopData, shopcount);
    })




    $("#ckbox1,#ckbox2").on("click", function () {
        // console.log(this);
        console.log($(this).prop("checked"));
        if ($(this).prop("checked")) {
            ischeck = "checked";
            creatLi(shopData, shopcount, ischeck);
        } else {
            ischeck = "";
            creatLi(shopData, shopcount, ischeck);
        }


    })






})