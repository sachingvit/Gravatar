/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(function () {
    function initlizator(start, end, elementClass) {
        for (var i = start; i <= end; i++) {
            elementBlock = '<div data-avatar="' + String.fromCharCode(i) + '" class="avatarBlock ' + elementClass + '"></div>'
            $('.block').append(elementBlock);
        }
    }

    $.fn.init_process = function () {
        initlizator(65, 90, 'round');
        initlizator(97, 122, 'box');
        setTimeout(function () {
            $('.avatarBlock').avatar();
        }, 1000);
    };



});
        