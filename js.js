//jQuery plugin

(function($) {
    $.fn.inner_float = function(options) {
        var settings = $.extend({
            top: 0,
        }, options);
        var el = this;
        //fixed property will lose width sometimes
        var width = el.width();
        var par = $(this).parent("div");
        var bot_pos = parseInt(par.height()) + par.offset().top;
        var top_pos = el.offset().top;
        $(document).scroll(function() {
            if ($(document).scrollTop() <= top_pos - parseInt(settings.top)) {
                console.log(1)
                $(el).css({
                    'top': "",
                    'bottom': "",
                    'position': "",
                })
            } else if ($(document).scrollTop() <= bot_pos - $(el).height() - parseInt(settings.top)) {
                console.log(2)
                $(el).css({
                    'top': settings.top,
                    'bottom': "",
                    'position': "fixed",
                    'width': width
                })
            } 
            else {
                console.log(3);
                $(el).css({
                    'top': bot_pos - parseInt(el.height()),
                    'position': "absolute",
                })
            }
        })
    }
}(jQuery));

//

$(document).ready(function() {
    $("#el").inner_float({
        top: "10px",
    });
});