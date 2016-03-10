
wrapper = $(".menu");
sidebar = $(".menu-sidebar");
navbar = $(".navbar");
// HEEEECKK YEEEEAAAHAHHHHHHH
$(window).scroll(() => {
    top_offset = 80;
    mt = ($(".navbar").height() + top_offset).toString() + "px";
    sideheight = $(".sidebar").height();
    stop = $(wrapper).offset().top + $(wrapper).height() - $(sidebar).height() - parseInt($(sidebar).css("top")) - 30;
    if ($(window).scrollTop() > stop) { // Bottomed
        topp = $(wrapper).height() - $(sidebar).height() - parseInt($(wrapper).css("padding")) - 30;
        $(sidebar).css({"position": "static", "margin-top": topp});
    }
    else if ($(window).scrollTop() + top_offset > $(".jumbotron-menu").height() - 255) {
        $(sidebar).css({"position": "fixed", "top": mt, "margin-top": "0px"});
    }
    else {
        mt = ($(wrapper).height() - $(wrapper).offset().top - 2*$(sidebar).height()).toString() + "px";
        $(sidebar).css({"position": "static", "margin-top": "10px"});
    }

    f = $(".menu-section-wrapper").children();
    j = $(".menu-sidebar").children().children();
    for (var k=0; k<j.length; k++) {
        j[k] = $(j[k]).children()[0];
    }
    for (i=f.length-1; i>=0; i--) {
        if ($(window).scrollTop() + 200> $(f[i]).offset().top) {
            break;
        }
    }
    console.log(i);
    $(j[i]).css({"background-color":"#e8ddbb"});
    for (var k=0; k<j.length; k++) {
        if (k == i) continue;
        else $(j[k]).css({"background-color": "#fff"});
    }
});

$(".menu-link").click((event) => {
    content = $(event.target).parent().nextAll(".menu-section-content");
    if ($(window).width() < 700 && $(event.target).hasClass("open")) {
        content.css({"display": "none"});
        $(event.target).removeClass("open");
    }
    else {
        content.css({"display": "block"});
        $(event.target).addClass("open");
    }
});

