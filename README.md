# litejs
rollup -c

npm publish

## api
* core
    * isArray(value)
    * isBoolean(value)
    * isDate(value)
    * isFunction(value)
    * isNumber(value)
    * isObject(value)
    * isString(value)
    * extend(dist, src)
    * copy(value)
    * equals(value1, value2)
* device
    * os
    * browser
    * version
* convert
    * toDate(value)
    * toNumber(value)
    * toJson(value)
    * toString(value)
    * arrayToObject
    * objectToArray
* url
    * parse(href)
    * stringify(location)
    * query(href)
* array
    * find(value|options) //支持对象数组
    * indexOf(value|options) //支持对象数组
    * orderBy(options)
    *
* string
    * indexOf(string)
* date
    * format(date, fmtString)
    * isLeapYear(date)
    * daysInMonth(date)
    * dayOfYear(date)
    * add(date, msec)
    * equal(date1, date2)
    * diff(date1, date2)
* object
* network
    * http（不需要）
    * socket
* storage
    * cookie
        * get(key)
        * set(key, value, options)
        * remove(key)
        * clear()
    * storage
        * get(key)
        * set(key, value, options)
        * remove(key)
        * clear()
    * session
        * get(key)
        * set(key, value)
        * remove(key)
        * clear()
* other
    * debounce
    * throttle
