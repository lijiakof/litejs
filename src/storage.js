
$storage = {
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
                obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
            }
            return obj;
        },
        set: function (key, value, options) {
            if (key == null || value == null) return;

            options = options || {};
            var str = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;

            if (options.path) str += `; path=${options.path}`;
            if (options.domain) str += `; domain=${options.domain}`;
            if (options.expires) str += `; expires=${options.expires.toUTCString()}`;
            if (options.secure) str += `; secure`;

            window.document.cookie = str;
        },
        remove: function(key) {

        },
        clear: function(){

        }
    },
    local: {
        get: function (key) {
            if(key) {
                window.localStorage.getItem(key);
            }
        },
        set: function (key, value, options) {
            if(key) {
                window.localStorage.setItem(key, value);
            }
        },
        remove: function (key) {
            window.localStorage.removeItem(key);
        },
        clear: function() {
            window.localStorage.clear();
        }
    },
    session: {
        get: function (key) {
            if(key) {
                window.sessionStorage.getItem(key);
            }
        },
        set: function (key, value) {
            if(key) {
                window.sessionStorage.setItem(key, value);
            }
        },
        remove: function (key) {
            window.sessionStorage.removeItem(key);
        },
        clear: function() {
            window.sessionStorage.clear();
        }
    }
};


export default $storage;