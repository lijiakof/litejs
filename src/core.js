let $core = {
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
export default $core;