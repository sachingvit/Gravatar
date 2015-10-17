/*!
 * Gravatar plugin v1.0 Beta
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
            var display = '';
            var element = $(this).attr('data-avatar');
            if ($(this).is('div') || $(this).is('span')) {
                var strArr = element.split(' ');
                if (strArr.length) {
                    for (var indexVal = 0; indexVal < ((strArr.length >= 2) ? 2 : strArr.length); indexVal++) {
                        console.log(indexVal);
                        var charArray = strArr[indexVal].split("");
                        if (charArray[0] != undefined) {
                            display += charArray[0];
                        }
                    }
                    $(this).addClass('avatar-' + display).text(display.toUpperCase()).addClass('avatar-A');
                }
            }
        });
    };
}(jQuery));


/*"use strict";
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
 */