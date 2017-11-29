/*lite js*/
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(factory());
}(this, (function () { 'use strict';

var date = {
  now: function now() {},

  format: function format(date, fmtString) {},
  add: function add() {},
  isLeapYear: function isLeapYear() {},
  daysInMonth: function daysInMonth() {},
  dayOfYear: function dayOfYear() {},
  equal: function equal() {},
  diff: function diff() {}
};

var utils = {
    copy: function copy(value) {

        var obj = new Object();

        for (var attr in value) {
            if (value.hasOwnProperty(attr)) {
                if (typeof obj[attr] !== 'function') {
                    if (value[attr] === null) {
                        obj[attr] = null;
                    } else {
                        obj[attr] = this.$copy(value[attr]);
                    }
                }
            }
        }

        return obj;
    },
    hash: function hash(value) {
        var hash = 1315423911,
            i,
            ch;
        for (i = string.length - 1; i >= 0; i--) {
            ch = string.charCodeAt(i);
            hash ^= (hash << 5) + ch + (hash >> 2);
        }
        return hash & 0x7FFFFFFF;
    }
};

console.log('hello world');

})));
//# sourceMappingURL=lite.js.map
