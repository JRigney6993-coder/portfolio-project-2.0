$(window).on("scroll", function () {
    var scrollPosition = $(window).scrollTop();
    var header = $("header");
    var bgColor = header.css("background-color");

    if (bgColor === "rgba(8, 6, 36, 0)") {
        if (scrollPosition >= 50) {
            header.css({
                "background-color": "rgba(8, 6, 36, .3)",
                "box-shadow": "0px 0px 30px -2px rgba(134, 85, 255, .3)",
                "backdrop-filter": "blur(1.5px)"
            });
        }
    } else if (scrollPosition === 0) {
        header.css({
            "background-color": "rgba(8, 6, 36, 0)",
            "box-shadow": " 0px 0px 30px -5px rgba(134, 85, 255, 0)",
            "backdrop-filter": "blur(0px)"
        });
    }
});

$('.card').each(function () {
    $(this).children().css("transform-style", "preserve-3d");

    $(this).on('mouseenter', function () {
        $(this).on('mousemove', rotateDiv);
    });

    $(this).on('mouseleave', function () {
        $(this).off('mousemove', rotateDiv);
        $(this).css("transform", "");
        $(this).css("box-shadow", "");
    });

    var div = $(this);
    function rotateDiv(e) {
        var rect = div[0].getBoundingClientRect();
        var centerX = rect.width / 2;
        var centerY = rect.height / 2;
        var deltaX = e.clientX - rect.left - centerX;
        var deltaY = e.clientY - rect.top - centerY;

        div.css("transform", `rotate3d(${-deltaY}, ${deltaX}, 0, 15deg)`);

        var shadowX = deltaX * 0.1;
        var shadowY = deltaY * 0.1;
        div.css("box-shadow", `${shadowX}px ${shadowY}px 2rem .05rem rgba(134, 85, 255, .4)`);
    }
});


