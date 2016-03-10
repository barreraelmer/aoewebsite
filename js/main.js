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



