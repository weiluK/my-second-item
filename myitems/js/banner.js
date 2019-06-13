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

        if (oSliderBoxItemCount > 5) {
            for (var i = 0; i < 5; i++) {
                oSliderBox.append(oSliderBox.children("li").eq(i).clone());
            }
            oSliderBoxItemCount = oSliderBoxItemCount + 5;
        }


        let oSliderBoxItemWidth = oSliderBoxItem.width() + 34;



        let switchSlider = (index) => {
            if (index == oSliderBoxItemCount - 1) {
                index = 0;
            }
            // $(".slider-nav-item").eq(index).addClass("active").siblings().removeClass("active");
        }


        let next = () => {
            index++;
            /*临界值检查*/
            if (index >= oSliderBoxItemCount - 4) {
                index = 5;
                $(".slider-box").css("left", -4 * oSliderBoxItemWidth + "px");
            }
            oSliderBoxLeft = index * oSliderBoxItemWidth;
            oSliderBox.stop(true).animate({
                "left": -oSliderBoxLeft + "px"
            });
            switchSlider(index);
        }
        let prev = () => {

            index -= 1;


            /*临界值检查*/

            if (index < 0) {

                index = oSliderBoxItemCount - 6;
                oSliderBox.css("left", -(oSliderBoxItemCount - 5) * oSliderBoxItemWidth + "px");
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

        /*02-设置自动播放*/
        autoPlay();

        /*03-设置鼠标移入的时候停止自动播放，移开的时候重新播放*/
        $(".tempWrap,.icon-jt-left").hover(() => clearInterval(timer), autoPlay);

        /*04-点击切换*/
        oNext.click(next);
        oPrev.click(prev)

    })
})