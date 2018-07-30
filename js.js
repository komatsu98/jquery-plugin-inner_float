//jQuery plugin
(function($) {
    $.fn.inner_float = function(options) {
        var settings = $.extend({
            top: 0,
        }, options);
        var el = this;
        //fixed property will lose width sometimes
        var width = el.width();
        var par = $(this).parent();
        var bot_pos = par.height() + par.offset().top;
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
            } else {
                //if par has position: relative
                if ($(par).css('position') == 'relative') {
                    $(el).css({
                        'bottom': 0,
                        'position': "absolute",
                    })
                } else {
                	$(el).css({
                        'top': bot_pos - el.height(),
                        'position': "absolute",
                    })
                }
            }
        })
    }
}(jQuery));
//
$(document).ready(function() {
    $("#almost-show").inner_float({
        top: "10px",
    });
});