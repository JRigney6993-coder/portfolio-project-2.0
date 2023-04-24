window.addEventListener("scroll", function () {
    var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    var header = document.querySelector("header");
    var divStyle = window.getComputedStyle(header);
    var bgColor = divStyle.getPropertyValue("background-color");

    if (bgColor === "rgba(8, 6, 36, 0)") {
        if (window.pageYOffset >= 50) {
            header.style.backgroundColor = "rgba(8, 6, 36, .3)";
            header.style.boxShadow = "0px 0px 30px -2px rgba(134, 85, 255, .3)"
            header.style.backdropFilter = "blur(1.5px)"
        }
    } else if (window.pageYOffset === 0) {
        header.style.backgroundColor = "rgba(8, 6, 36, 0)";
        header.style.boxShadow = " 0px 0px 30px -5px rgba(134, 85, 255, 0)"
        header.style.backdropFilter = "blur(0px)"
    }
});