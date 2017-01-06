# 存储

## Cookie {#cookie}
对 Cookie 的操作

### $cookie.set(key, value[, options])
设置 Cookie

#### 参数

| 参数 | 必需 | 类型 | 备注 |
| :-- | :-- | :-- | :-- |
| key | 是 | string |  |
| vaule | 是 | any |  |
| options | 否 | object |  |

##### options

| 参数 | 类型 | 备注 |
| :-- | :-- | :-- |
| expires | date |  |
| domain | string |  |
| path | string |  |
| secure | string |  |

#### 返回
undefined

#### 用法

```
let user = {
    name: 'jay',
    sessionId: ''
};
$cookie.set('user', user, {
    expires: new Date('2017-10-23'),
    domain: 'litejs.org'
});
```

### $cookie.get(key)
获取 Cookie

#### 参数

| 参数 | 必需 | 类型 | 备注 |
| :-- | :-- | :-- | :-- |
| key | 是 | string |  |

#### 返回
any: 

#### 用法

```
let user = $cookie.set('user');
```

### $cookie.remove(key)
删除 Cookie

#### 参数

| 参数 | 必需 | 类型 | 备注 |
| :-- | :-- | :-- | :-- |
| key | 是 | string |  |


#### 返回
undefined

#### 用法

```
$cookie.remove('user');
```

### $cookie.clear()
清除 Cookie

#### 参数
无

#### 返回
undefined

#### 用法

```
$cookie.clear();
```

## Local Storage {#localstorage}

### $storage.set(key, value[, options])
### $storage.get(key)
### $storage.remove(key)
### $storage.clear()

## Session Storage {#sessionstorage}

### $session.set(key, value[, options])
### $session.get(key)
### $session.remove(key)
### $session.clear()