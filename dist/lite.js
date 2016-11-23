/*lite js*/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.Lite = factory());
}(this, (function () { 'use strict';

date = {
    format: function(){},
    isLeapYear: function(){},
    daysInMonth: function(){},
    dayOfYear: function(){},
    add: function(){},
    equal: function(){},
    diff: function(){}
};

var $core = {
    isArray: function (obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    },
    isNumber: function (obj) {
        return typeof obj === 'number' && isFinite(obj);
    },
    isString: function (obj) {
        return obj === obj + ''
    },
    isBoolean: function (obj) {
        return obj === !!obj
    },
    extend: function(){

    },
    copy: function(){},
    hello: function(){
        console.log('hello world');
    }
};

return $core;

})));
