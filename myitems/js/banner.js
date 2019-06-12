$(function () {


    console.log("---------------");

    $(function () {

        /*00-获取页面标签，封装工具函数*/
        let oSlider = $(".tempWrap");
        let oSliderBoxItem = $(".slider-box-item");
        let oSliderBox = $(".slider-box");
        let oPrev = $(".next");
        let oNext = $(".prev");
        // let oSliderNav = $(".slider-nav");
        let timer;
        let index = 0;
        let oSliderBoxLeft = 0;
        let oSliderBoxItemCount = oSliderBoxItem.length;

        console.log(oSliderBoxItemCount);

        let oSliderBoxItemWidth = oSliderBoxItem.width() + 34;
        console.log(oSliderBoxItemWidth);


        let switchSlider = (index) => {
            if (index == oSliderBoxItemCount - 1) {
                index = 0;
            }
            // $(".slider-nav-item").eq(index).addClass("active").siblings().removeClass("active");
        }


        let next = () => {

            index++;
            console.log(index);
            /*临界值检查*/
            if (index >= oSliderBoxItemCount - 4) {
                index = 1;
                oSliderBox.css("left", 0);
            }
            oSliderBoxLeft = index * oSliderBoxItemWidth;
            oSliderBox.stop(true).animate({
                "left": -oSliderBoxLeft + "px"
            });
            switchSlider(index);
        }
        let prev = () => {

            index -= 1;
            console.log(index);

            /*临界值检查*/

            if (index < 0) {

                index = oSliderBoxItemCount - 5;
                oSliderBox.css("left", (oSliderBoxItemCount) * oSliderBoxItemWidth);
            }


            oSliderBoxLeft = index * oSliderBoxItemWidth;
            oSliderBox.stop(true).animate({
                "left": -oSliderBoxLeft + "px"
            });
            switchSlider(index);
        }
        let autoPlay = () => {
            timer = setInterval(next, 2000);
        }


        /*01-设置标签样式*/
        // oSliderBoxItem.each(function (i, ele) {
        //     $(this).css("background", $.getRandomColor());

        //     console.log(oSliderBoxItemCount, i);
        //     if (i == oSliderBoxItemCount - 1) return false;
        //     /*创建对应的图标并且插入到页面中*/
        //     $(`<li class="slider-nav-item">${i + 1}</li>`).appendTo(oSliderNav);
        //     $(".slider-nav-item").first().addClass("active");
        // })

        /*02-设置自动播放*/
        autoPlay();

        /*03-设置鼠标移入的时候停止自动播放，移开的时候重新播放*/
        $(".tempWrap,.icon-jt-left").hover(() => clearInterval(timer), autoPlay);

        /*04-点击切换*/
        oNext.click(next);
        oPrev.click(prev)

        /*05-鼠标移入小图标的时候显示对应的滑块*/
        // $(".slider-nav-item").mouseenter(function () {
        //     var index = $(this).index();
        //     oSliderBoxLeft = index * oSliderBoxItemWidth;
        //     oSliderBox.stop(true).animate({
        //         "left": -oSliderBoxLeft + "px"
        //     });
        //     switchSlider(index);
        // })
    })
})