
wrapper = $(".menu");
sidebar = $(".menu-sidebar");
navbar = $(".navbar");
$(window).scroll(() => {
    top_offset = 80;
    mt = ($(".navbar").height() + top_offset).toString() + "px";
    sideheight = $(".sidebar").height();
    stop = $(wrapper).offset().top + $(wrapper).height() - $(sidebar).height() - parseInt($(sidebar).css("top"));
    if ($(window).scrollTop() > stop) { // Bottomed
        topp = $(wrapper).height() - $(sidebar).height() - parseInt($(wrapper).css("padding"));
        $(sidebar).css({"position": "static", "margin-top": topp});
    }
    else if ($(window).scrollTop() + top_offset > $(".jumbotron-menu").height() + 10) {
        $(sidebar).css({"position": "fixed", "top": mt, "margin-top": "0px"});
    }
    else {
        mt = ($(wrapper).height() - $(wrapper).offset().top - 2*$(sidebar).height()).toString() + "px";
        $(sidebar).css({"position": "static", "margin-top": "10px"});
    }
});