* [简介](README.md)
* [全局](/doc/core.md)
    * $.typeof(value)
    * $.isArray(value)
    * $.isBoolean(value)
    * $.isDate(value)
    * $.isFunction(value)
    * $.isNumber(value)
    * $.isObject(value)
    * $.isString(value)
    * $.extend(dist, src)
    * $.copy(value)
    * $.equals(value1, value2)
* 环境/设备
    * $device.os
    * $device.browser
    * $device.version
* 数据转换
    * $convert.toDate(value)
    * $convert.toNumber(value)
    * $convert.toJson(value)
    * $convert.toString(value)
    * $convert.arrayToObject
    * $convert.objectToArray
* URL 操作
    * $url.parse(href)
    * $url.stringify(location)
    * $url.query(href)
* 数组
    * $array.find(value|options) //支持对象数组
    * $array.indexOf(value|options) //支持对象数组
    * $array.orderBy(options)
    *
* 字符串
    * $string.indexOf(string)
* 日期
    * $date.format(date, fmtString)
    * $date.isLeapYear(date)
    * $date.daysInMonth(date)
    * $date.dayOfYear(date)
    * $date.add(date, msec)
    * $date.equal(date1, date2)
    * $date.diff(date1, date2)
* object
* 网络
    * $http（不需要）
    * $socket
* 存储
    * [Cookie](/doc/cookie.md)
        * $cookie.get(key)
        * $cookie.set(key, value, options)
        * $cookie.remove(key)
        * $cookie.clear()
    * Local Storage
        * $storage.get(key)
        * $storage.set(key, value, options)
        * $storage.remove(key)
        * $storage.clear()
    * Session Storage
        * $session.get(key)
        * $session.set(key, value)
        * $session.remove(key)
        * $session.clear()
* 其它
    * debounce
    * throttle
