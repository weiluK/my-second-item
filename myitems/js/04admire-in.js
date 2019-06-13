$(function () {

    let ulList = $(".ad-list");
    let osubmit = $("submit");
    tmp = [];

    let queryString = "";
    let userphone = COOKIE.getItem("userphone");
    let password = COOKIE.getItem("password");
    let res = true;
    if (userphone && password) {
        // console.log("___存在Cookie数据___");

        // console.log(userphone);
        // console.log(password);
        console.log("+--------------");
        res = false;
        let data01 = {
            type: "check",
            dataAll: {
                phone: userphone,
                password: password
            }
        };
        // queryString = $.param(data01);
        netWork(data01);

    } else {
        $(".submit").on("click", function () {
            // 判断有无输入值


            let userphone = $(this).parent().children("li").children("input").eq(0).val()
            let userpassword = $(this).parent().children("li").children("input").eq(1).val()


            if (userphone == 0 || userpassword == 0) {
                alert("请输入完整的信息！")
            } else {
                let data = {
                    type: "check",
                    dataAll: {
                        phone: userphone,
                        password: userpassword
                    }
                };

                netWork(data);
            }


        })



    }




    for (var j = 0; j < 4; j++) {
        let checkNumber = parseInt(Math.random() * (10));
        tmp.push(checkNumber);
    }
    // console.log(tmp);
    let a = tmp.join("");

    $(".checkbox").html(a);



    $(".ad-list li").children("input").blur(function () {
        let getcheckNumber = $(this).val();
        let tmp1 = []

        if (!(/^\d{4}$/.test(getcheckNumber))) {

            $(this).next().css("background-position", "0px -44px").css("visibility", "visible").parent().attr("success", "false");
            $(this)
        } else {

            for (var n = 0; n < 4; n++) {
                tmp1.push(getcheckNumber.charAt(n))

                if (getcheckNumber.charAt(n) != tmp[n]) {
                    $(this).next().css("background-position", "0px -44px").css("visibility", "visible").parent().attr("success", "false")

                    return false;
                }
            }

            $(this).next().css("background-position", "0px 0px").parent().attr("success", "true");

        }

    })


    // 七天免登陆功能


    function netWork(queryString) {
        $.get({
            url: "http://127.0.0.1/weilu/my-second-item/myitems/api/iformation.php",
            data: queryString,
            success(res) {
                // console.log(res);
                // //如果登录成功，跳转到成功的页面
                // //如果登录失败，弹框提示用户失败的信息
                if (res == 0) {
                    alert("用户名不存在");
                } else if (res == "202") {
                    alert("密码错误");

                } else {
                    if (res == true) {
                        if ($(".ad-list").children("li").eq(2).attr("success")) {

                            if ($(".ad-list .check input").prop("checked")) {
                                COOKIE.setItem("userphone", queryString.dataAll.phone);
                                COOKIE.setItem("password", queryString.dataAll.password);
                            }
                            window.location.href = "01main-1.html";
                            // $(this).children("a").attr("href", "01main.html")
                        }
                    } else {
                        window.location.href = "01main-1.html";
                    }
                }
            }
        });
    }



    // $(".ad-list .check input").on("click", function () {
    //     console.log($(".ad-list .check input").prop("checked"));


    //     let userphone = $(".ad-input").children("input").eq(0).val();
    //     let userpassword = $(".ad-input").children("input").eq(1).val();


    //     // console.log(userphone);
    //     // console.log(userpassword);


    //     if (userphone == 0 || userpassword == 0) {
    //         alert("用户或密码不能为空");
    //     } else {
    //         if ($(".ad-list .check input").prop("checked")) {
    //             COOKIE.setItem("userphone", userphone);
    //             COOKIE.setItem("password", userpassword);
    //         }
    //     }
    // })


})