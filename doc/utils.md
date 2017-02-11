# 基础

## 全局 API

### $typeof(value) {#typeof}
判断某个值是什么数据类型。

#### 参数
| 参数 | 必需 | 类型 | 备注 |
| :--- | :--- | :--- | :--- |
| value | 是 | any | 传入任何类型的数据 |

*注：any 代表任意类型。*

#### 返回
string：返回类型的名字。

| 类型 | 描述 |
| :--- | :--- |
| string | 字符串 |
| number | 数字 |
| array | 数组 |
| boolean | 布尔 |
| object | 对象 |
| date | 日期 |
| function | 方法 |

#### 用法
```
let obj = [];
let type = $typeof(obj);
```

### $isArray(value) {#isArray}
判断某个值是否是数组类型。

#### 参数
| 参数 | 必需 | 类型 | 备注 |
| :--- | :--- | :--- | :--- |
| value | 是 | any | 传入任何类型的数据 |

#### 返回
boolean：如果返回是 true ，那么传入的参数就是数组，否则不是。

#### 用法
```
let list = [];
let isArray = $isArray(list);
```

### $isBoolean(value) {#isBoolean}
判断某个值是否是布尔类型。

#### 参数
| 参数 | 必需 | 类型 | 备注 |
| :--- | :--- | :--- | :--- |
| value | 是 | any | 传入任何类型的数据 |

#### 返回
boolean：如果返回是 true ，那么传入的参数就是布尔类型，否则不是。

#### 用法
```
let obj = true;
let type = $isBoolean(obj);
```

### $isDate(value) {#isDate}
判断某个值是否是日期类型。

#### 参数
| 参数 | 必需 | 类型 | 备注 |
| :--- | :--- | :--- | :--- |
| value | 是 | any | 传入任何类型的数据 |

#### 返回
boolean：如果返回 true ，那么传入的参数就是日期类型，否则不是。

#### 用法
```
let date = new Date();
let type = $isDate(date);
```

### $isFunction(value) {#isFunction}
判断某个值是否是方法类型。

#### 参数
| 参数 | 必需 | 类型 | 备注 |
| :--- | :--- | :--- | :--- |
| value | 是 | any | 传入任何类型的数据 |

#### 返回
boolean：如果返回 true，那么传入的参数就是日期类型，否则不是。

#### 用法
```
let fn = function() {
};
let type = $isFunction(date);
```

### $isNumber(value) {#isNumber}
判断某个值是否是数字类型。

#### 参数
| 参数 | 必需 | 类型 | 备注 |
| :--- | :--- | :--- | :--- |
| value | 是 | any | 传入任何类型的数据 |

#### 返回
boolean：如果返回 true，那么传入的参数就是数字类型，否则不是。

#### 用法
```
let a = 1;
let type = $isNumber(a);
```










