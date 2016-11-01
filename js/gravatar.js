/*!
 * Gravatar plugin v2.0 Beta
 *
 * Copyright 2015, 2015 Open Source Foundation
 * Released under the MIT license
 * Author: Sachin Jain
 * Date: 2016-11-01T06:14
 */

"use strict";
(function () {
    $.fn.avatar = function (options) {
        var options = $.extend({
            width: 300,
            height: 200
        }, options);

        return $(this).each(function () {
            var display = '';
            var element = $(this).attr('data-avatar');
            var elementImage = ((typeof $(this).attr('data-image-src') !== typeof undefined && $(this).attr('data-image-src') !== false) ? true : false);
            if ($(this).is('div') || $(this).is('span')) {
                var strArr = element.split(' ');

                /* validate broken link */
                var isBroken = false;
                if (elementImage) {
                    $(this).addClass('avatar-img').attr('title', element).html('<img src="' + $(this).attr('data-image-src') + '" class="image-avatar">').addClass('avatar-A');
                }
                if (strArr.length) {

                    display = ((strArr[0] != undefined)?strArr[0].charAt(0):'')+ ((strArr[1] != undefined)?strArr[1].charAt(0):'');

                    $(this).addClass('avatar-' + display[0]).attr('title', element).html($(this).html() + '<span style="display:' + (elementImage ? "none" : "block") + '" class="text-avatar">' + display.toUpperCase() + '</span>').addClass('avatar-A');

                    imageValidator();
                }
            }
        });
    };
}(jQuery));
function  imageValidator() {
    $(document).find("img").error(function () {
        $(this).hide().next('span').show();
//    $(this).unbind("error").attr("src", "broken.gif");
    });
}
