# Summary

* [简介](README.md)

----

### 基础

* [全局](core.md)
    * $.typeof(value)
    * $.isArray(value)
    * $.isBoolean(value)
    * $.isDate(value)
    * $.isFunction(value)
    * $.isNumber(value)
    * $.isObject(value)
    * $.isString(value)
    * $.isEqual(value1, value2)
    * $.extend(dist, src)
    * $.copy(value)
    * $.encode
    * $.decode
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

### 计算
* 数组
    * $array.find(value) //支持对象数组
    * $array.indexOf(value) //支持对象数组
    * $array.orderBy(options)
    * $array.unique(value)
    * $array.merge(value1, value2)
    * $array.reverse()
* 字符串
    * $string.indexOf(string)
* 日期
    * $date.now()
    * $date.format(date, fmtString)
    * $date.isLeapYear(date)
    * $date.daysInMonth(date)
    * $date.dayOfYear(date)
    * $date.add(date, msec)
    * $date.equal(date1, date2)
    * $date.diff(date1, date2)
* 对象
    * $object.keys(object)
    * $object.pairs(object)
* URL
    * $url.parse(href)
    * $url.stringify(location)
    * $url.query(href)

### 存储
* [Cookie](storage.md#cookie)
    * $cookie.get
    * $cookie.set
    * $cookie.remove
    * $cookie.clear
* [Local Storage](storage.md#localstorage)
    * $storage.get
    * $storage.set
    * $storage.remove
    * $storage.clear
* [Session Storage](storage.md#sessionstorage)
    * $session.get
    * $session.set
    * $session.remove
    * $session.clear

### 网络
* $http（不需要）
* $socket

### 其它
* debounce
* throttle
