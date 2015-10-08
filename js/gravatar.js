/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
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