$(function () {

    var eventWidth = $(".event-turn").find("div").length * 350;
    $(".event-turn").css("width",eventWidth);
    var viewWidth = $(window).width();
    $(".event-turn").draggable({
        axis: "x",
        start: function() {
            viewWidth = $(window).width();
            if(parseInt($(".event-turn").css("left"))>=0){
                $(".event-turn").css("left",0);
                console.log("true");
            }
            if(parseInt($(".event-turn").css("left"))<=-(eventWidth-viewWidth)){
                $(".event-turn").css("left",-(eventWidth-viewWidth));
            }
        },
        drag: function() {
            viewWidth = $(window).width();
            if(parseInt($(".event-turn").css("left"))>=0){
                $(".event-turn").css("left",0);
                console.log("true");
            }
            if(parseInt($(".event-turn").css("left"))<=-(eventWidth-viewWidth)){
                $(".event-turn").css("left",-(eventWidth-viewWidth));
            }
        },
        stop: function() {
            viewWidth = $(window).width();
            if(parseInt($(".event-turn").css("left"))>=0){
                $(".event-turn").css("left",0);
                console.log("true");

            }
            if(parseInt($(".event-turn").css("left"))<=-(eventWidth-viewWidth)){
                $(".event-turn").css("left",-(eventWidth-viewWidth));
            }
        }
    });


    var leftTurn = 500;
    $("#event-btn-right").click(function () {
        if(parseInt($(".event-turn").css("left"))>=-leftTurn){
            $(".event-turn").animate({"left":0})
        }else{
            $(".event-turn").animate({"left":parseInt($(".event-turn").css("left"))+leftTurn})
        }
    })
    $("#event-btn-left").click(function () {
        viewWidth = $(window).width();
        if(parseInt($(".event-turn").css("left"))<=-(eventWidth-viewWidth-leftTurn)){
            $(".event-turn").animate({"left":-(eventWidth-viewWidth)})
        }else{
            $(".event-turn").animate({"left":parseInt($(".event-turn").css("left"))-leftTurn})
        }
    })

})