/*!
 * jQuery JavaScript Library v1.11.3
 * Gravatar plugin
 * 
 *
 * Copyright 2015, 2015 Open Source Foundation
 * Released under the MIT license
 * 
 * Date: 2015-10-09T06:14
 */


"use strict";
(function () {
    $.fn.avatar = function () {
        $(this).each(function () {
            var element = $(this).attr('data-avatar');
            if (element.length) {
                var charArray = element.split("");
                if (charArray[0] != undefined) {
                    $(this).addClass('avatar-' + charArray[0]).text(charArray[0]);
                }
            }
        });
    };
}(jQuery));
