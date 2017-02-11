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
    * [$isEqual(value1, value2)](utils.md#isEqual)
    * [$extend(dist, src)](utils.md#extend)
    * [$copy](utils.md#copy)
    * [$guid](utils.md)
    * [$encode](utils.md#encode)
    * [$decode](utils.md#decode)
* [环境&设备](utils.md)
    * [$device.os](device.md#os)
    * [$device.version](device.md#version)
    * [$device.browser](device.md#browser)
* [数据转换](utils.md)
    * $convert.toDate
    * $convert.toNumber
    * $convert.toString
    * $convert.toJson
    
### 计算
* 数组/集合
    * $array.find(value) //支持对象数组
    * $array.indexOf(value) //支持对象数组
    * $array.orderBy
    * $array.unique
    * $array.merge
    * $array.reverse
    * $array.without
    * $array.max
    * $array.min
* 字符串
    * $string.indexOf
    * $string.trim
* 日期
    * $date.now
    * $date.format(date, fmtString)
    * $date.isLeapYear
    * $date.daysInMonth
    * $date.dayOfYear
    * $date.add
    * $date.equal
    * $date.diff
* 对象
    * $object.keys
    * $object.pairs
* URL
    * $url.parse
    * $url.stringify
    * $url.query
* map

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
* $http（不需要）
* $socket

## 其它
* $debounce
* $throttle

