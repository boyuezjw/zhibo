$(function () {

    // 导航条宽度随浏览器变化
    var viewWidth = $(window).width();
    if(viewWidth>=1440){
        $("#js-nav").css("width",1440);
        $(".nav-menu").css("width",1440);
    }else if(viewWidth>=1200){
        $("#js-nav").css("width",viewWidth);
        $(".nav-menu").css("width",viewWidth);
    }else{
        $("#js-nav").css("width",1200);
        $(".nav-menu").css("width",1200);
    }
    $(window).resize(function(){    //浏览器窗口变化事件
        viewWidth = $(window).width();
        if(viewWidth>=1440){
            $("#js-nav").css("width",1440);
            $(".nav-menu").css("width",1440);
        }else if(viewWidth>=1200){
            $("#js-nav").css("width",viewWidth);
            $(".nav-menu").css("width",viewWidth);
        }else{
            $("#js-nav").css("width",1200);
            $(".nav-menu").css("width",1200);
        }
    })


    if($(".fade-slide").length>0){
        fadeSlide(".slide-item",".slide-btn","slide-btn-s",1,5000);   //宽度100%，高度自适应
    }

    $(".fixed-back-top").click(function () {
        $("html, body").animate({"scrollTop":0})
    })
})