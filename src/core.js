$core = {
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
    date: {
        add: function(){},
        format: function(){}
    },
    extend: function(){

    }
};
export default $core;