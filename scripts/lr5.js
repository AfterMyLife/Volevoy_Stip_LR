$(document).ready(function () {
    $("#anim").click(function () {
        $(".image").animate({
            left: '400px'
        }, 2000, "linear");
        $(".image").animate({
            width: '150px',
            height: '150px'
        }, 2000, "linear");
        $(".image").animate({
            left: '50px'
        }, 2000, "linear");

    });
});

$(document).ready(function () {
    $("p").click(function () {
        var text_input = $("p");
        text_input.css("font-style", "italic");
    });
})


$(document).ready(function () {
    $("select").change(function () {
        if ($("select option:selected").index() == 1) {
            $("#test").attr('disabled', true);
        } else {
            $("#test").attr('disabled', false);
        }
    });
})

$(document).ready(function () {
    $('input[name="radio"]').click(function () {
        if ($(this).val() == 1) {
            $("select").attr('disabled', false);
        } else {
            $("select").attr('disabled', true);
        }
    });
})

$(".acordeon").on("click", ".panel", function () {
    $(this).toggleClass("active").next().slideToggle();
});