$storage = {
    //todo: decode & encode
    cookie: {
        get: function (key) {
            return all()[key];
        },
        all: function () {
            var obj = {};

            var pairs = window.document.cookie.split(/ *; */);
            var pair;
            if (pairs[0] == '') return obj;
            for (var i = 0; i < pairs.length; ++i) {
                pair = pairs[i].split('=');
                obj[pair[0]] = pair[1];
            }
            return obj;
        },
        set: function (key, value, options) {
            if (key == null || value == null) return;

            options = options || {};
            var str = `${key}=${value}`;

            if (options.path) str += `; path=${options.path}`;
            if (options.domain) str += `; domain=${options.domain}`;
            if (options.expires) str += `; expires=${options.expires.toUTCString()}`;
            if (options.secure) str += `; secure`;

            window.document.cookie = str;
        }
    },
    local: {
        get: function () {},
        set: function () {}
    },
    session: {
        get: function () {},
        set: function () {}
    },
    encode: function (value) {
        try {
            return encodeURIComponent(value);
        } catch (e) {

        }
    },
    decode: function (value) {
        try {
            return decodeURIComponent(value);
        } catch (e) {

        }
    }
};