$(window).on("scroll", function () {
    var scrollPosition = $(window).scrollTop();
    var header = $("header");
    var bgColor = header.css("background-color");

    if (bgColor === "rgba(8, 6, 36, 0)") {
        if (scrollPosition >= 50) {
            header.css({
                "background-color": "rgba(8, 6, 36, .3)",
                "box-shadow": "0px 0px 50px 0px rgba(134, 85, 255, .3)",
                "backdrop-filter": "blur(3px)"
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

$(document).ready(function() {
    // Define your project images
    var projects = {
        'student-management-panel': ['./assets/images/projects/student_management/Image_4.jpg', './assets/images/projects/student_management/Image_1.jpg', './assets/images/projects/student_management/Image_2.jpg', './assets/images/projects/student_management/Image_3.jpg'],
        'image-geofinder': ['./assets/images/projects/image_geofinder/Image_1.jpg'],
        'project3': ['image7.jpg', 'image8.jpg', 'image9.jpg']
    };

    // Listen for button clicks
    $('.view-project').click(function() {
        var project = $(this).data('project');
        var images = projects[project];
        
        // Clear the carousel
        $('.carousel-indicators').empty();
        $('.carousel-inner').empty();

        // Load the images into the carousel
        for (var i = 0; i < images.length; i++) {
            $('<li>').attr({
                'data-bs-target': '#carouselExampleIndicators',
                'data-bs-slide-to': i
            }).appendTo('.carousel-indicators');
        
            $('<div>').attr('class', 'carousel-item')
            .append($('<img>').attr({
                'class': 'd-block w-100',
                'src': images[i],
                'alt': 'Slide ' + (i + 1)
            })).appendTo('.carousel-inner');
        }
        
        // Set the first carousel item to be the active one
        $('.carousel-item').first().addClass('active');
        $('.carousel-indicators > li').first().addClass('active');
        
        // Show the modal
        $('#projectModal').modal('show');
        });
        });
        

