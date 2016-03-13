// Monday-Friday: 7a-4p
// Saturday-Sunday: Closed
$(document).ready( function() {
    // $(".navlink").addClass("white");
    var d = new Date();
    update_hours(d);
});

function update_hours(d) {
    var hr = d.getHours();
    var min = d.getMinutes();
    var date = d.getDate(); // 0 - 6, sunday=0, saturday=6

    if (date == 0 || date == 6) {
        $("#msg").text("We're closed");
    }
    else if (date == 5) {   // Friday
        if ((hr >= 7 && hr < 16) || (hr == 16 && min < 30)) {
            $("#msg").text("Open til 4:30 today");
        }
    }
    else if (hr >= 7 && hr < 17) {
        $("#msg").text("Open til 5 today");

    }
    else { 
        $("#msg").text("We're closed");
    }
}

/*! waitForImages jQuery Plugin 2015-06-02 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){var b="waitForImages";a.waitForImages={hasImageProperties:["backgroundImage","listStyleImage","borderImage","borderCornerImage","cursor"],hasImageAttributes:["srcset"]},a.expr[":"]["has-src"]=function(b){return a(b).is('img[src][src!=""]')},a.expr[":"].uncached=function(b){return a(b).is(":has-src")?!b.complete:!1},a.fn.waitForImages=function(){var c,d,e,f=0,g=0,h=a.Deferred();if(a.isPlainObject(arguments[0])?(e=arguments[0].waitForAll,d=arguments[0].each,c=arguments[0].finished):1===arguments.length&&"boolean"===a.type(arguments[0])?e=arguments[0]:(c=arguments[0],d=arguments[1],e=arguments[2]),c=c||a.noop,d=d||a.noop,e=!!e,!a.isFunction(c)||!a.isFunction(d))throw new TypeError("An invalid callback was supplied.");return this.each(function(){var i=a(this),j=[],k=a.waitForImages.hasImageProperties||[],l=a.waitForImages.hasImageAttributes||[],m=/url\(\s*(['"]?)(.*?)\1\s*\)/g;e?i.find("*").addBack().each(function(){var b=a(this);b.is("img:has-src")&&j.push({src:b.attr("src"),element:b[0]}),a.each(k,function(a,c){var d,e=b.css(c);if(!e)return!0;for(;d=m.exec(e);)j.push({src:d[2],element:b[0]})}),a.each(l,function(c,d){var e,f=b.attr(d);return f?(e=f.split(","),void a.each(e,function(c,d){d=a.trim(d).split(" ")[0],j.push({src:d,element:b[0]})})):!0})}):i.find("img:has-src").each(function(){j.push({src:this.src,element:this})}),f=j.length,g=0,0===f&&(c.call(i[0]),h.resolveWith(i[0])),a.each(j,function(e,j){var k=new Image,l="load."+b+" error."+b;a(k).one(l,function m(b){var e=[g,f,"load"==b.type];return g++,d.apply(j.element,e),h.notifyWith(j.element,e),a(this).off(l,m),g==f?(c.call(i[0]),h.resolveWith(i[0]),!1):void 0}),k.src=j.src})}),h.promise()}});

$(".background").addClass("loading");
// Wait for image loads
$(".background").waitForImages(() => {
    $img = $(".background").css('background');
    $('.background').fadeTo(0, 0, () => {
        $(this).css({'background': $img + " !important"});
    }).fadeTo('slow', 1);
    $(".background").removeClass("loading");
});