# 基础


### $typeof(value) {#typeof}
判断某个值是什么类型

#### 参数

| 参数 | 必需 | 类型 | 备注 |
| :-- | :-- | :-- | :-- |
| value | 是 | any | 传入任何类型的数据 |

*注：any 代表任意类型。*

#### 返回
string：返回类型的名字

| 类型 | 描述 |
| :-- | :-- |
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
判断某个值是否是数组类型

#### 参数

| 参数 | 必需 | 类型 | 备注 |
| :-- | :-- | :-- | :-- |
| value | 是 | any | 传入任何类型的数据 |

#### 返回
boolean：如果返回是 true ，那么传入的参数就是数组

#### 用法

```
let list = [];
let isArray = $isArray(list);
```

### $isBoolean(value) {#isBoolean}
判断某个值是否是布尔类型

#### 参数

| 参数 | 必需 | 类型 | 备注 |
| :-- | :-- | :-- | :-- |
| value | 是 | any | 传入任何类型的数据 |

#### 返回
boolean：如果返回是 true ，那么传入的参数就是布尔类型

#### 用法

```
let obj = true;
let type = $isBoolean(obj);
```





    
