# Summary

* [简介](README.md)

## 基础
* [全局 API](utils.md)
    * [$typeof](utils.md#typeof)
    * [$isArray](utils.md#isArray)
    * [$isBoolean](utils.md#isBoolean)
    * [$isDate](utils.md#isDate)
    * [$isFunction](utils.md#isFunction)
    * [$isNumber](utils.md#isNumber)
    * [$isObject](utils.md#isObject)
    * [$isString](utils.md#isString)
    * [$isEqual\(value1, value2\)](utils.md#isEqual)
    * [$extend\(dist, src\)](utils.md#extend)
    * [$copy](utils.md#copy)
    * [$encode](utils.md#encode)
    * [$decode](utils.md#decode)
* [环境\/设备](环境设备.md)
    * $device.os
    * $device.browser
    * $device.version
* [数据转换](数据转换.md)
    * $convert.toDate
    * $convert.toNumber
    * $convert.toString
    * $convert.toJson
    * $convert.arrayToObject

## 计算
* [数组](数组.md)
    * $array.find\(value\) \/\/支持对象数组
    * $array.indexOf\(value\) \/\/支持对象数组
    * $array.orderBy\(options\)
    * $array.unique\(value\)
    * $array.merge\(value1, value2\)
    * $array.reverse\(\)
* 字符串
    * $string.indexOf\(string\)
    * $string.trim\(\)
* 日期
    * $date.now\(\)
    * $date.format\(date, fmtString\)
    * $date.isLeapYear\(date\)
    * $date.daysInMonth\(date\)
    * $date.dayOfYear\(date\)
    * $date.add\(date, msec\)
    * $date.equal\(date1, date2\)
    * $date.diff\(date1, date2\)
* 对象
    * $object.keys\(object\)
    * $object.pairs\(object\)
* URL
    * $url.parse\(href\)
    * $url.stringify\(location\)
    * $url.query\(href\)

## 存储
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

## 网络
* [$http（不需要）](http（不需要）.md)
* [$socket](socket.md)

## 其它
* [debounce](debounce.md)
* [throttle](throttle.md)

