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
    * toDate
    * toNumber
    * toJson
    * toString
    * arrayToObject
    * objectToArray
* url
    * parse
    * stringify
    * query
* array
    * find(value|options) //支持对象数组
    * indexOf(value|options) //支持对象数组
    * orderBy(options)
    * 
* string
    * 
* date
    * format(fmtString)
    * isLeapYear()
    * daysInMonth
    * dayOfYear
    * add(msec)
    * equal
    * diff
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