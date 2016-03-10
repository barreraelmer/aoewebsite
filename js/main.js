// Monday-Friday: 7a-4p
// Saturday-Sunday: Closed
$(document).ready( function() {
    // $(".navlink").addClass("white");
    var d = new Date();
    update_hours(d);
    $(window).scroll(function() {

    });
});

function update_hours(d) {
    var hr = d.getHours();
    var min = d.getMinutes();
    var date = d.getDate(); // 0 - 6, sunday=0, saturday=6
    console.log(hr);
    console.log(min);

    if (date == 0 || date == 6) {
        console.log("We're closed");
        $("#msg").text("We're closed");
    }
    else if (date == 5) {   // Friday
        if ((hr >= 7 && hr < 16) || (hr == 16 && min < 30)) {
            console.log("Open til 4:30 today");
            $("#msg").text("Open til 4:30 today");
        }
    }
    else if (hr >= 7 && hr < 17) {
        console.log("Open til 5 today");
        $("#msg").text("Open til 5 today");

    }
    else { 
        console.log("We're closed");
        $("#msg").text("We're closed");
    }
}


wrapper = $(".menu");
sidebar = $(".menu-sidebar");
navbar = $(".navbar");
$(window).scroll(() => {

    // Temporary cancellation of this feature on default /browse page, change this
    // if (window.location.href.match(/browse\/.+\?/)) {
    mt = $(".navbar").height();
    stop = $(wrapper).offset().top + $(wrapper).height() - $(sidebar).height() - parseInt($(sidebar).css("top")) - 10;
    if ($(window).scrollTop() > stop) { // Bottomed
        console.log("yes");
        topp = $(wrapper).height() - $(sidebar).height() - parseInt($(wrapper).css("padding"));
        $(sidebar).css({"position": "static", "margin-top": topp});
    }
    else if ($(window).scrollTop() > $(".jumbotron-menu").height()) {
        $(sidebar).css({"position": "fixed", "top": mt, "margin-top": "10px"});
    }
    else {
        mt = ($(wrapper).height() - $(wrapper).offset().top - 2*$(sidebar).height()).toString() + "px";
        $(sidebar).css({"position": "static", "margin-top": "10px"});
        console.log("jank");
    }
});


