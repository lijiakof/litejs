let utils = {
    $typeof: function(value) {
        
    },
    $isArray: Array.isArray || function (value) {
        return Object.prototype.toString.call(value) === '[object Array]';
    },
    $isBoolean: function (value) {
        return value === !!value
    },
    $isDate: function (value) {
        return toString.call(value) === '[object Date]';
    },
    $isFunction: function (value) {
        return toString.call(value) === '[object Function]';
    },
    $isNumber: function (value) {
        return typeof value === 'number' && isFinite(value);
    },
    $isObject: function (value) {
        
    },
    $isString: function (value) {
        return value === value + ''
    },
    $extend: function (dist, src) {
        for(let attr in src) {
            dist[attr] = src[attr];
            
        }
        return dist;
    },
    $copy: function (value) {
        //return JSON.parse(JSON.stringify(value));

        let obj = new Object();

        for(let attr in value) {
            if(value.hasOwnProperty(attr)) {
                if(typeof(obj[attr]) !== 'function') {
                    if(value[attr] === null) {
                        obj[attr] = null;
                    }
                    else {
                        obj[attr] = this.$copy(value[attr]);
                    }
                }
            }
        }

        return obj;
    },
    $hash: function(value) {
        var hash = 1315423911, i, ch;
        for (i = string.length - 1; i >= 0; i--) {
            ch = string.charCodeAt(i);
            hash ^= ((hash << 5) + ch + (hash >> 2));
        }
        return (hash & 0x7FFFFFFF);
    },
    $hello: function () {
        console.log('hello world');
    }
};
export default utils;