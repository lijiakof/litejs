# Storage

## Cookie {#cookie}

### $cookie.get(key)

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

## Local Storage {#localstorage}

## Session Storage {#sessionstorage}