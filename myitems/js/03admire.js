$(function () {
    let user = $(".ad-list .ad-input")
    let tmp = [];
    user.children("input").blur(function () {
        let index = $(this).parent().index();


        if (index == 0) {
            let phoneNumber = $(this).val();

            if (!(/^1[3456789]\d{9}$/.test(phoneNumber))) {
                $(this).next().css("background-position", "0px -44px").css("visibility", "visible").parent().attr("success", "false").next().css("visibility", "visible")
                return false;
            } else {
                $(this).next().css("background-position", "0px 0px").css("visibility", "visible").parent().attr("success", "true").next().css("visibility", "hidden")
            }
        } else if (index == 2) {

            let getcheckNumber = $(this).val();
            len = getcheckNumber.length

            if (len == 4) {
                let tmp1 = []

                if (!(/^\d{4}$/.test(getcheckNumber))) {
                    console.log($(this).parent());
                    $(this).parent().attr("success", "false").next().css("visibility", "visible")

                } else {

                    console.log(tmp);

                    for (var n = 0; n < 4; n++) {
                        tmp1.push(getcheckNumber.charAt(n))
                        if (getcheckNumber.charAt(n) != tmp[n]) {
                            $(this).parent().attr("success", "false").next().css("visibility", "visible")

                        }
                    }


                    $(this).parent().attr("success", "true").next().css("visibility", "hidden");

                }
            } else {
                $(this).parent().attr("success", "false").next().css("visibility", "visible")
            }
        } else if (index == 4) {
            let userPassword = $(this).val();

            if (!(/^\w{6,16}$/.test(userPassword))) {
                $(this).next().css("background-position", "0px -44px").css("visibility", "visible").parent().attr("success", "false").next().css("visibility", "visible")
                return false;
            } else {
                $(this).next().css("background-position", "0px 0px").css("visibility", "visible").parent().attr("success", "true").next().css("visibility", "hidden")
            }
        } else if (index == 6) {
            let reUserPassword = $(this).val();


            if (reUserPassword.length <= 0) {
                $(this).next().css("background-position", "0px -44px").css("visibility", "visible").parent().attr("success", "false").next().css("visibility", "visible")

            } else {


                if (reUserPassword != $(this).parent().prev().prev().children("input").val()) {
                    $(this).next().css("background-position", "0px -44px").css("visibility", "visible").parent().attr("success", "false").next().css("visibility", "visible")
                    return false;
                } else {
                    $(this).next().css("background-position", "0px 0px").css("visibility", "visible").parent().attr("success", "true").next().css("visibility", "hidden")
                }
            }
        }



    })

    $(".check-item").on("click", function () {
        tmp = [];
        for (var j = 0; j < 4; j++) {
            let checkNumber = parseInt(Math.random() * (10));
            tmp.push(checkNumber);

        }
        // console.log(tmp);
        let a = tmp.join("");
        console.log(a);

    })






    $(".ad-list .complete").on("click", function () {

        if ($(".ad-list .check input").prop("checked")) {

            let phone = $(".ad-list .ad-input").eq(0).children("input").val();
            let password = $(".ad-list .password").children("input").val();

            if ($(".ad-list .ad-input").eq(0).attr("success") && $(".ad-list .ad-input").eq(1).attr("success") && $(".ad-list .ad-input").eq(2).attr("success") && $(".ad-list .ad-input").eq(3).attr("success")) {

                $.ajax({
                    url: "http://127.0.0.1/weilu/my-second-item/myitems/api/iformation.php",
                    data: {
                        type: "add",
                        dataAll: {
                            phone: phone,
                            password: password
                        }
                    },
                    success(data) {
                        if (data == "204") {
                            alert("该用户已注册");

                        } else {
                            // alert("注册成功")
                            window.location.href = "04admire-in.html";

                        }

                    }


                })



            }

        } else {
            return false;
        }

    })






















})