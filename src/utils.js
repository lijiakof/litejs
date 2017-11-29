/** 
 * 公共模块
 * @module utils */

export default {
    /**
     * 拷贝
     * @param { Any } value - 传入拷贝的值
     * @return { Any } 拷贝后的
     */
    copy: function (value) {
        //return JSON.parse(JSON.stringify(value));

        let obj = new Object();

        for (let attr in value) {
            if (value.hasOwnProperty(attr)) {
                if (typeof (obj[attr]) !== 'function') {
                    if (value[attr] === null) {
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
    hash: function (value) {
        var hash = 1315423911, i, ch;
        for (i = string.length - 1; i >= 0; i--) {
            ch = string.charCodeAt(i);
            hash ^= ((hash << 5) + ch + (hash >> 2));
        }
        return (hash & 0x7FFFFFFF);
    }
};