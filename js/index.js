$(function () {

    // 头部导航条滚动固定定位
    var lastScrollTop = 0;
    $(window).scroll(function(){
        var st = $(this).scrollTop();
        if (st > lastScrollTop&& st > viewHeight){     //滚动条下滚
            $("nav").css("position","fixed");
            $("nav").css("background","rgba(0,0,0,.3)");

        }else{       //滚动条上滚
            if(st < lastScrollTop && st<=viewHeight){
                $("nav").css("position","static");
                $("nav").css("background","#333");
            }
        }
        lastScrollTop = st;
    });



    $("#header-jt").click(function () {
        $("html, body").animate({"scrollTop":$("nav").offset().top});
    })

    $("#js-news-change").find("li").each(function (i,elem) {
        $(this).click(function () {
            $("#js-news-change").find("li").removeClass("active");
            $(this).addClass("active");
            $(".index-news-item").hide();
            $(".index-news-item").eq(i).show();
        })
    })

    $("#js-score-change").find("li").each(function (i,elem) {
        $(this).click(function () {
            $("#js-score-change").find("li").removeClass("active");
            $(this).addClass("active");
            $(".index-score-item").hide();
            $(".index-score-item").eq(i).show();
        })
    })

    $("#js-works-change").find("li").each(function (i,elem) {
        $(this).click(function () {
            $("#js-works-change").find("li").removeClass("active");
            $(this).addClass("active");
            $(".index-works-pic").hide();
            $(".index-works-pic").eq(i).show();
        })
    })

    // 循环执行旋转木马函数
    for(var j=0;j<$(".index-score-item").length;j++){
        var fItem = ".index-score-item:eq("+ j +")";
        whirligig(fItem,".index-score-item0",".index-score-item1",".index-score-item2",".index-score-item3",".left-btn",".right-btn");
    }
    //旋转木马函数
    function whirligig(fItem,item0,item1,item2,item3,left,right) {

        // 初始化
        var imgNum = $(fItem).find(item3).size();
        var item00 = $(fItem).find(item3).eq(0);
        var item11 = $(fItem).find(item3).eq(1);
        var item22 = $(fItem).find(item3).eq(2);
        item00.attr("class",item0.substring(1));
        item11.attr("class",item1.substring(1));
        item22.attr("class",item2.substring(1));

        if(imgNum>3){
            $(fItem).find(left).click(function () {
                $(fItem).find(item0).attr("class",item3.substring(1));
                $(fItem).find(item1).attr("class",item0.substring(1));
                $(fItem).find(item2).next().attr("class",item2.substring(1));
                $(fItem).find(item2).eq(0).attr("class",item1.substring(1));
                $(fItem).find(item3).eq(0).insertBefore( $(fItem).find(right) );
            })

            $(fItem).find(right).click(function () {
                $(fItem).find(item2).attr("class",item3.substring(1));
                $(fItem).find(item1).attr("class",item2.substring(1));
                $(fItem).find(item0).attr("class",item1.substring(1));
                $(fItem).find(item3).eq($(item3).size()-1).attr("class",item0.substring(1));
                $(fItem).find(item0).eq(0).insertAfter( $(fItem).find(left) );
            })
        }else if(imgNum == 3){
            $(fItem).find(left).click(function () {
                $(fItem).find(item0).attr("class",item2.substring(1));
                $(fItem).find(item1).attr("class",item0.substring(1));
                $(fItem).find(item2).eq(1).attr("class",item1.substring(1));
                $(fItem).find(item2).insertBefore( $(fItem).find(right) );
            })

            $(fItem).find(right).click(function () {
                $(fItem).find(item2).attr("class",item0.substring(1));
                $(fItem).find(item1).attr("class",item2.substring(1));
                $(fItem).find(item0).eq(0).attr("class",item1.substring(1));
                $(fItem).find(item0).insertAfter( $(fItem).find(left) );
            })
        }else{
            console.log("图片数量不足3张,旋转轮播无法正常轮播");
        }
    }
    
})