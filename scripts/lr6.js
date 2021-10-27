$(document).ready(function () {
    $("#anim").click(function () {
        $(".image").animate({
            left: '50px'
        }, 2000, "linear");
        $(".image").animate({
            width: '100px',
            height: '100px'
        }, 2000, "linear");
        $(".image").animate({
            bottom: "-100px",
        }, 1000);
        $(".image").animate({
            //background:"brown";
            backgroundColor: "red",
        }, 1000);
        $(".image").animate({
            opacity: "0",
        }, 1000);
    });
});